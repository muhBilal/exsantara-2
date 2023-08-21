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
  link_gform: yup.string().required(),
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

  const [totalQuestion, setTotalQuestion] = useState([1]);
  const [questions, setQuestions] = useState([]);

  const imageFile = watch("image");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCreate = async (data) => {
    if (loading) return;

    // if (questions.length === 0) return; // Gunakan === untuk memeriksa kesamaan

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("link_gform", data.link_gform);
    formData.append("desc", data.desc);
    formData.append("image", data.image[0]);
    // questions.forEach((question) => {
    //   if (question !== "") {
    //     formData.append("questions[]", question);
    //   }
    // });

    try {
    //   setLoading(true); // Ubah state loading menjadi true sebelum permintaan Axios
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API + "/assignments",
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

        router.push("/admin/quiz");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false); // Ubah state loading menjadi false setelah permintaan Axios
  };

  const addQuestion = () => {
    const newQuestionNumber = totalQuestion.length + 1;
    setTotalQuestion([...totalQuestion, newQuestionNumber]);
    setQuestions([...questions, ""]);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
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
                    htmlFor="link_gform"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Link Google Form
                  </label>
                  <input
                    type="text"
                    id="link_gform"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="googleform.com"
                    {...register("link_gform")}
                  />
                  {errors.link_gform && (
                    <p className="text-red-500 text-sm">
                      {errors.link_gform.message}
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
                    className={`border border-gray-400 h-42 w-full cursor-link_gformer flex items-center justify-center`}
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

                {/* <div className="mb-6">
                  <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    List Pertanyaan
                  </h6>
                  {totalQuestion.map((el, index) => (
                    <div key={index} className="mb-3">
                      <input
                        type="text"
                        id={`question-${index}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan pertanyaan..."
                        value={questions[index] || ""}
                        onChange={(e) =>
                          handleQuestionChange(index, e.target.value)
                        }
                      />

                      {errors.questions && (
                        <p className="text-red-500 text-sm">
                          {errors.questions.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div>
                    <button
                      className="btn-outline w-full"
                      type="button"
                      onClick={addQuestion}
                    >
                      Tambah Pertanyaan
                    </button>
                  </div>
                </div> */}

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
