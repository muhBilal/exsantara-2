"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GiEarthAmerica } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaLocationArrow } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  name: yup.string().required("Username harus diisi!"),
  email: yup
    .string()
    .email("Format email tidak sesuai!")
    .required("Email harus diisi!"),
  password: yup.string().required("Password harus diisi!"),
});

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const HandleRegister = async (data) => {
    if (loading) {
      return;
    }

    const query = await axios.post(
      process.env.NEXT_PUBLIC_API + "/auth/register",
      data
    );
    const res = await query.data;

    setLoading(true);

    if (res.status) {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      
      router.push("/home")
    } else {
      setErrorMessage("Tidak dapat melakukan registrasi!");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("token")) {
        router.push("/home");
      }
    }
  }, []);

  return (
    <section className="h-screen flex gap-5 w-full p-4">
      <div className="w-full md:w-[40%] font-poppins">
        <img src="/images/logo.png" alt="" className="w-36 h-12 object-cover" />
        <div className={`px-7`}>
          <div className="px-9">
            <h1 className="font-bold text-3xl mt-14">Buat Akun</h1>
            <p className="text-gray-400 mt-5 mb-12">
              Jelajahi Keragaman Indonesia dengan ExSantara
            </p>

            <div className={`my-5`}>
              <button className="mt-2 bg-white w-full flex gap-3 items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-200 transition ease-in transform hover:-translate-y-1 active:translate-y-0 border px-8 py-2.5">
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3033_94454)">
                    <path
                      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Daftar dengan Google</span>
              </button>
            </div>

            <div className="flex items-center gap-2 my-5">
              <div className="w-full h-1 border-b-2"></div>
              <span className="text-bold">Atau</span>
              <div className="w-full h-1 border-b-2"></div>
            </div>

            <form className={`mt-5`}>
              {errorMessage && (
                <div className="mb-6">
                  <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    {errorMessage}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <input
                  type="text"
                  id="firstname"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit(HandleRegister)}
                className="btn-primary w-full"
              >
                <span className="font-2xl">Tambah Data</span>
              </button>
              <p className="text-gray-400 my-5">
                Sudah mempunyai akun?{" "}
                <Link
                  href={"/auth/login"}
                  className="text-gray-600 font-bold cursor-pointer hover:text-blue-500"
                >
                  Masuk sekarang
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[60%] relative hidden md:block">
        <img
          src="/images/culture1.jpeg"
          alt=""
          className="h-full w-full object-cover rounded-2xl"
        />
        <div className="w-full h-full rounded-2xl bg-gradient-to-t from-gray-900 opacity-10 absolute bottom-0"></div>
        <div className="absolute top-0 right-0 bg-white rounded-full m-5 text-md px-4 font-semibold py-1 flex gap-2 items-center cursor-pointer">
          <span>www.exsantara.com</span>
          <FaLocationArrow className="font-extrabold -rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-10 font-poppins text-white">
          <p className="font-extrabold text-2xl leading-10">
            "Bersama ExSantara menjelajahi kebudayaan dan berpetualang menikmati
            keindahan indonesia yang menakjubkan"
          </p>
          <div className="flex gap-4 mt-3">
            <div className="max-w-xs border border-white px-2 py-1 flex items-center gap-3 rounded-lg">
              <LiaPeopleCarrySolid />
              <span>200+ keberagaman</span>
            </div>
            <div className="max-w-xs border border-white px-2 py-1 flex items-center gap-3 rounded-lg">
              <GiEarthAmerica />
              <span>34 Provinsi dan 100+ kebudayaan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
