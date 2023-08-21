"use client";
import React, { Component } from "react";
import Layouts from "@/components/Layouts";
import { CiMenuKebab } from "react-icons/ci";

class Page extends Component {
  render() {
    return (
      <Layouts>
        <div className={`h-full`}>
          <section className={`flex `}>
            <div className={`w-[60%] bg-white px-10 py-10`}>
              <div className={`flex gap-5 items-end`}>
                <h1 className={`text-3xl`}>20.23</h1>
                <h1 className={`text-gray-400 text-sm`}>13 April 2023</h1>
              </div>
              <div className={`h-[83%] mt-10 flex flex-col gap-5`}>
                <div className={`flex gap-3`}>
                  <img
                    src="/images/man.jpg"
                    alt="profile"
                    className={`w-[50px] h-[50px] object-cover rounded-full`}
                  />
                  <div
                    className={`bg-gray-200 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded px-5 py-2`}
                  >
                    <h1 className={`font-semibold text-sm`}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, quis.
                    </h1>
                    <h6 className={`text-gray-500 text-sm`}>Nama</h6>
                  </div>
                </div>
                <div className={`flex gap-3`}>
                  <img
                    src="/images/man.jpg"
                    alt="profile"
                    className={`w-[50px] h-[50px] object-cover rounded-full`}
                  />
                  <div
                    className={`bg-gray-200 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded px-5 py-2`}
                  >
                    <h1 className={`font-semibold text-sm`}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, quis.
                    </h1>
                    <h6 className={`text-gray-500 text-sm`}>Nama</h6>
                  </div>
                </div>
                <div className={`flex gap-3`}>
                  <img
                    src="/images/man.jpg"
                    alt="profile"
                    className={`w-[50px] h-[50px] object-cover rounded-full`}
                  />
                  <div
                    className={`bg-gray-200 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded px-5 py-2`}
                  >
                    <h1 className={`font-semibold text-sm`}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, quis.
                    </h1>
                    <h6 className={`text-gray-500 text-sm`}>Nama</h6>
                  </div>
                </div>
              </div>
              <div className={`grow`}>
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tulis Pesan..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Kirim
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className={`grow p-10`}>
              <div className={`flex justify-between mb-5`}>
                <h1 className={`text-2xl`}>Hewan</h1>
                <h1 className={`text-sm text-blue-500 cursor-pointer`}>
                  Lihat Lainnya
                </h1>
              </div>

              <div className={`mt-20`}>
                <div
                  className={`mt-10 z-30 bg-white relative p-5 rounded-xl shadow-sm w-full h-[310px] shadow-lg`}
                >
                  <img
                    src="/images/animal.jpg"
                    alt="animal"
                    className={`object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                    group -translate-y-1/2 w-[250px] h-[140px]`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute left-1/2 -translate-x-1/2 bottom-10"
                    }
                  >
                    <h1
                      className={`text-center mt-2 mb-2 font-semibold text-lg text-primary`}
                    >
                      Hewan
                    </h1>
                    <p className={`text-sm mb-3 block`}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni ullam velit vitae. Architecto consequuntur
                      doloremque eligendi, eos fuga hic id itaque iusto magni
                    </p>
                    <button className={`mx-auto btn-primary-lite text-sm`}>
                      Lihat Detail
                    </button>
                  </div>
                </div>

                <section className={`mt-10`}>
                  <div className={`flex justify-between mb-5`}>
                    <h1 className={`text-2xl`}>Popular</h1>
                    <h1 className={`text-sm text-blue-500 cursor-pointer`}>
                      Lihat Lainnya
                    </h1>
                  </div>
                  <div className={`flex flex-col gap-3`}>
                    <div
                      className={`bg-white rounded-xl py-3 px-5 flex justify-between items-center`}
                    >
                      <div className={`flex gap-3 items-center`}>
                        <img
                          src="/images/animal.jpg"
                          alt="item"
                          className={`w-[40px] h-[40px] rounded-full object-cover`}
                        />
                        <h1>Biawak Bangka</h1>
                      </div>
                      <CiMenuKebab
                        className={`rotate-90 text-xl cursor-pointer`}
                        data-popover-target="detail"
                      />

                      <div
                        data-popover
                        id="detail"
                        role="tooltip"
                        className="absolute z-10 px-5 py-2 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
                      >
                        <button type="button" className="btn-primary text-sm">
                          Detail
                        </button>
                      </div>
                    </div>
                    <div
                      className={`bg-white rounded-xl py-3 px-5 flex justify-between items-center`}
                    >
                      <div className={`flex gap-3 items-center`}>
                        <img
                          src="/images/animal.jpg"
                          alt="item"
                          className={`w-[40px] h-[40px] rounded-full object-cover`}
                        />
                        <h1>Biawak Bangka</h1>
                      </div>
                      <CiMenuKebab
                        className={`rotate-90 text-xl cursor-pointer`}
                        data-popover-target="detail1"
                      />

                      <div
                        data-popover
                        id="detail1"
                        role="tooltip"
                        className="absolute z-10 px-5 py-2 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
                      >
                        <button type="button" className="btn-primary text-sm">
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </Layouts>
    );
  }
}

export default Page;
