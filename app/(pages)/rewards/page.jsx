"use client";
import Layouts from "components/Layouts";
import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full justify-center align-middle h-full">
      <FontAwesomeIcon icon={faCircleXmark} spin size="2xl" />
      <h1 className="font-semibold text-center mt-3">Data Tidak Ditemukan</h1>
    </div>
  );
};

export default function page() {
  const [rewards, setRewards] = useState([]);
  const [rewardDisplay, setRewardDisplay] = useState([]);

  const handleSearch = (keyword) => {
    const filteredItems = rewards.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setRewardDisplay(filteredItems);
  };

  const fetchData = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API + "/rewards"
    );
    setRewards(res.data.data);
    setRewardDisplay(res.data.data);
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
            <h1 className={`title`}>Hadiah</h1>
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
                  placeholder="Cari hadiah ..."
                  required
                  onChange={(e) => handleSearch(e.target.value)}
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
                      Hadiah
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </section>

          <section className="mt-5">
            {rewardDisplay.length === 0 && <NotFound />}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`}
            >
              {rewardDisplay.map((reward, index) => (
                <Link
                  key={index}
                  href={`/rewards/${reward.id}`}
                  className={`cursor-pointer hover:shadow-md transition-all`}
                >
                  <img
                    src={
                      process.env.NEXT_PUBLIC_STORAGE + reward.image_thumbnail
                    }
                    alt="rewards"
                    className={`w-full h-[300px] object-cover rounded-tl-lg rounded-tr-lg`}
                  />
                  <div className="rounded-bl-lg rounded-br-lg p-2">
                    <div className={`flex justify-between items-center`}>
                      <Link
                          href={`/rewards/${reward.id}`}
                          className={`text-gray-900 text-2xl font-bold my-2 hover:text-blue-600 transition-all`}
                      >
                        {reward.name.length > 20
                            ? reward.name.substring(0, 20) + "..."
                            : reward.name}
                      </Link>
                      <span className={`bg-gray-100 px-2 text-sm rounded-xl border text-yellow-400 border-yellow-400`}>{reward.point} Point</span>
                    </div>
                    <div
                      className={`text-gray-500 text-md`}
                      dangerouslySetInnerHTML={{
                        __html: reward.desc.substring(0, 150) + "...",
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layouts>
  );
}
