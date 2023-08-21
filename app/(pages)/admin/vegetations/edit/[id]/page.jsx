"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { BiCloudUpload } from "react-icons/bi";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required(),
  map: yup.string().required(),
  desc: yup
    .string()
    .test("html-validation", "Invalid HTML content", (value) => {
      const div = document.createElement("div");
      div.innerHTML = value;
      return div.textContent !== "";
    }),
  image_thumbnail: yup.mixed().required(),
  image: yup.mixed().required(),
});

export default function Page({ params }) {
  const [animal, setAnimal] = useState("");
  const [render, setRender] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: async (values) => {
      try {
        await schema.validate(values);
        return { values, errors: {} };
      } catch (validationErrors) {
        return {
          values,
          errors: validationErrors.inner.reduce((acc, current) => {
            acc[current.path] = current.message;
            return acc;
          }, {}),
        };
      }
    },
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API + `/provinces/animals/${params.id}`
      );
      setAnimal(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = () => {
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("name", animal.name);
    formData.append("province_id", 1);
    formData.append("map", animal.map);
    formData.append("desc", animal.desc);
    formData.append("image_thumbnail", animal.image_thumbnail[0]);
    for (let i = 0; i < animal.image.length; i++) {
      formData.append("image[]", animal.image[i]);
    }

    axios
      .post(
        process.env.NEXT_PUBLIC_API + `/provinces/animals/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setRender(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setRender(true);
      });
    console.log("sukses");
  };

  useEffect(() => {
    fetchData();
  }, [render]);

  useEffect(() => {
    console.log(animal);
  }, [animal]);

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
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Judul
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("name")}
                    onChange={(e) => (animal.name = e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={animal.name}
                  />
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
                    {...register("map")}
                    onChange={(e) => (animal.map = e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={animal.map}
                  />
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
                    className={`h-64 mb-20`}
                    onChange={(content) => setValue("desc", content)}
                    defaultValue={animal.desc}
                  />
                </div>
                <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Galeri Gambar
                  </h6>
                  <div className={`flex gap-5`}>
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
                        onChange={(e) => (animal.image = e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Header Gambar
                  </h6>
                  <label
                    htmlFor="header"
                    className={`border border-gray-400 h-42 w-full cursor-pointer flex items-center justify-center`}
                  >
                    <BiCloudUpload className={`text-gray-500 text-4xl`} />
                    <input
                      type="file"
                      id="header"
                      className="hidden"
                      {...register("image_thumbnail")}
                      onChange={(e) =>
                        (animal.image_thumbnail = e.target.value)
                      }
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit(handleUpdate)}
                  className="btn-primary-lite"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
