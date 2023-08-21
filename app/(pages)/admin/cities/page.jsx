"use client";
import AdminLayout from "@/components/AdminLayout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ModalLocation from "@/components/ModalLocation";
import Swal from "sweetalert2";

const page = () => {
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API + "/provinces/cities"
      );
      setCities(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Kamu Yakin?",
        text: "Kamu akan Menghapus Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya. Hapus!",
      });

      if (result.isConfirmed) {
        await axios.post(
          process.env.NEXT_PUBLIC_API + "/provinces/cities/delete/" + id
        );
        fetchData();
        Swal.fire("Deleted!", "Data Berhasil dihapus", "success");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      Swal.fire("Error!", "An error occurred while deleting data", "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Tabel Provinsi</h6>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className={`flex justify-between`}>
                <div className="relative my-3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ketik nama provinsi...."
                  />
                </div>
                <div>
                  <Link
                    href={"/admin/cities/create"}
                    className={`btn-outline`}
                    type="button"
                  >
                    Tambah Data
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Foto
                      </th>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Nama
                      </th>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map((city, index) => (
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="px-2 py-1">
                            <div>
                              <img
                                src={city.image_thumbnail}
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt={city.name}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            Programator
                          </p>
                        </td>
                        <td className="p-2 flex justify-center gap-3 bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <Link
                            href={`/admin/animals/edit/${city.id}`}
                            className={`btn-primary-lite`}
                          >
                            Edit
                          </Link>
                          <ModalLocation label={"Lokasi"} data={city} />
                          <button
                            className={`btn-danger-lite`}
                            onClick={() => handleDelete(city.id)}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
