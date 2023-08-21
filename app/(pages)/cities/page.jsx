"use client";
import Layouts from "components/Layouts";
import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Link from "next/link";
import axios from "axios";

export default function page() {
  const [cities, setMusics] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/cities");
    setMusics(res.data.data);
    console.log(cities);
  };

  useEffect(() => {
    fetchData();
    initFlowbite();
  }, []);

  return (
    <Layouts>
      <div className={`bg-gray-100 h-full`}>
        <div className={`container`}>
          <section className={`flex justify-between items-center mb-10`}>
            <h1 className={`title`}>Kota</h1>
            <form className="w-80">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      g
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block bg-gray-100 w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary focus:bg-white"
                  placeholder="Cari Beraneka Kebudayaan Disini ..."
                  required
                />
              </div>
            </form>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/home"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Beranda
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Kota
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </section>

          <section className="mt-5">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-7`}>
              {cities.length === 0 && (
                <p className={`text-2xl`}>Data Tidak Ada</p>
              )}
              {cities.map((city, index) => (
                <div>
                  <img
                    src={city.image_thumbnail}
                    alt="animals"
                    className={`w-full h-[300px] object-cover rounded-lg`}
                  />
                  <div>
                    <h5 className={`text-gray-900 text-2xl font-bold my-2`}>
                      {city.name}
                    </h5>
                    <h5 className={`text-gray-500 text-lg`}>{city.desc}</h5>
                    <div className={`flex gap-2 items-center mt-2`}>
                      <img
                        src="/images/paskal.jpeg"
                        alt="profile"
                        className={`w-[50px] h-[50px] object-cover rounded-full`}
                      />
                      {/*<div>*/}
                      {/*    <h1 className={`font-semibold text-lg`}>Pascal</h1>*/}
                      {/*    <h1 className={`text-sm text-gray-500`}>Marketing</h1>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav
              className={`mx-auto flex gap-5 py-10 justify-center items-center w-full`}
            >
              <div
                className={`p-2 bg-gray-200 shadow-sm rounded-full cursor-pointer hover:shadow-lg transition`}
              >
                <GrFormPrevious className={`text-2xl text-gray-200`} />
              </div>
              <div className={`flex gap-3 items-center`}>
                <p className={`font-semibold text-gray-700`}>1</p>
                <p className={`text-gray-500`}>2</p>
                <p className={`text-gray-500`}>3</p>
              </div>
              <div
                className={`p-2 bg-gray-200 shadow-sm rounded-full cursor-pointer hover:shadow-lg transition`}
              >
                <GrFormNext className={`text-2xl text-gray-200`} />
              </div>
            </nav>
          </section>
        </div>
      </div>
    </Layouts>
  );
}
