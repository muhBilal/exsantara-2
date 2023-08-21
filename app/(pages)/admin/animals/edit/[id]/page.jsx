"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { BiCloudUpload } from "react-icons/bi";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup.string().required(),
  map: yup.string().required(),
  image_thumbnail: yup.mixed().optional(),
  image: yup.mixed().optional(),
});

export default function Page({ params }) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const imageFile = watch("image_thumbnail");
  const galleries = watch("image");
  const [imageFileThumbnail, setImageFileThumbnail] = useState(null);
  const [imageFileGalleries, setImageFileGalleries] = useState(null);
  const [descDefault, setDescDefault] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchData = async () => {
    try {
      const query = await axios.get(
        process.env.NEXT_PUBLIC_API + `/provinces/animals/${params.id}`
      );
      const res = await query.data;
      setValue("name", res.data.name);
      setValue("map", res.data.map);
      setImageFileThumbnail(res.data.image_thumbnail);
      setImageFileGalleries(res.data.galleries);
      setDescDefault(res.data.desc);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = async (data) => {
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("province_id", 1);
    formData.append("map", data.map);
    formData.append("desc", descDefault);
    if (getValues("image_thumbnail").length > 0) {
      formData.append("image_thumbnail", data.image_thumbnail[0]);
    }

    if (getValues("image").length > 0) {
      for (let i = 0; i < data.image.length; i++) {
        formData.append("image[]", data.image[i]);
      }
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API + `/provinces/animals/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const responseData = response.data;
      console.log("Response:", responseData);

      if (responseData.status) {
        Swal.fire("Data berhasil dirubah!", "", "success");
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Adjust delay time as needed

        router.push("/admin/animals");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="text-2xl font-semibold dark:text-white mb-5">
                Ubah Data
              </h6>

              <form className={`px-10 pb-10`}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Judul
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Judul"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="map"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Link Map
                  </label>
                  <input
                    type="url"
                    id="map"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="youtube.com"
                    {...register("map")}
                  />
                  {errors.map && (
                    <p className="text-red-500 text-sm">{errors.map.message}</p>
                  )}
                </div>
                <div className={`mb-6`}>
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Deskripsi
                  </label>
                  <ReactQuill
                    id={"desc"}
                    theme="snow"
                    value={descDefault}
                    onChange={setDescDefault}
                    className="h-64 mb-20"
                  />
                </div>
                <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Galeri Gambar
                  </h6>
                  <div className={`grid grid-cols-4 gap-5`}>
                    <label
                      htmlFor="galeri"
                      className={`border border-gray-400 h-32 w-32 cursor-pointer flex items-center justify-center`}
                    >
                      <BiCloudUpload className={`text-gray-500 text-4xl`} />
                      <input
                        id="galeri"
                        className="hidden"
                        multiple
                        type="file"
                        {...register("image")}
                      />
                    </label>
                    {!dirtyFields.image
                      ? imageFileGalleries?.map((file, index) => (
                          <div key={index}>
                            <img
                              src={process.env.NEXT_PUBLIC_STORAGE + file.image}
                              alt={`Image ${index}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))
                      : Array.from(galleries).map((file, index) => (
                          <div key={index}>
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Image ${index}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                  </div>
                  {errors.image && (
                    <p className="text-red-500 text-sm">
                      {errors.image.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Header Gambar
                  </h6>
                  <label
                    htmlFor="header"
                    className={`border border-gray-400 h-42 w-full cursor-pointer flex items-center justify-center`}
                  >
                    {!dirtyFields.image_thumbnail ? (
                      <img
                        src={
                          process.env.NEXT_PUBLIC_STORAGE + imageFileThumbnail
                        }
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(imageFile[0])}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <input
                      type="file"
                      id="header"
                      className="hidden"
                      {...register("image_thumbnail")}
                    />
                  </label>
                  {errors.image_thumbnail && (
                    <p className="text-red-500 text-sm">
                      {errors.image_thumbnail.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit(handleUpdate)}
                  className="btn-primary"
                >
                  <span className="font-2xl">Ubah Data</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
