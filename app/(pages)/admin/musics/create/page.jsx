"use client";
import React, { Component, useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { BiCloudUpload } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup.string().required(),
  video: yup.string().required(),
  desc: yup.string().required(),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileFormat", "Unsupported file format", (value) => {
      if (!value.length) return false; // No file selected
      return ["image/jpeg", "image/png", "image/gif"].includes(value[0].type);
    }),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const imageFile = watch("image");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCreate = async (data) => {
    if (loading) return;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("city_id", 1);
    formData.append("video", data.video);
    formData.append("desc", data.desc);
    formData.append("image", data.image[0]);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API + "/cities/musics",
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
        Swal.fire("Data berhasil ditambahkan!", "", "success");
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Adjust delay time as needed

        router.push("/admin/musics");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="text-2xl font-semibold dark:text-white mb-5">
                Tambah Data
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
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Link Video
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="youtube.com"
                    {...register("video")}
                  />
                  {errors.video && (
                    <p className="text-red-500 text-sm">
                      {errors.video.message}
                    </p>
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
                    onChange={(content) => setValue("desc", content)}
                    className="h-64 mb-20"
                  />
                  {errors.desc && (
                    <p className="text-red-500 text-sm">
                      {errors.desc.message}
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
                    {dirtyFields.image ? (
                      <img
                        src={URL.createObjectURL(imageFile[0])}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <BiCloudUpload className={`text-gray-500 text-4xl`} />
                    )}
                    <input
                      type="file"
                      id="header"
                      className="hidden"
                      {...register("image")}
                    />
                  </label>
                  {errors.image && (
                    <p className="text-red-500 text-sm">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit(handleCreate)}
                  className="btn-primary"
                >
                  <span className="font-2xl">Tambah Data</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
