"use client";
import AdminLayout from "@/components/AdminLayout";
import ModalLocation from "@/components/ModalLocation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";

const page = () => {
  const [users, setUsers] = useState([]);
  const [usersDisplay, setUsersDisplay] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API + "/users");
      setUsers(res.data.data);
      setUsersDisplay(res.data.data);
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
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.post(process.env.NEXT_PUBLIC_API + "/users/delete/" + id);
        fetchData();
        Swal.fire("Deleted!", "Data Berhasil dihapus", "success");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      Swal.fire("Error!", "An error occurred while deleting data", "error");
    }
  };

  const handleSearch = (keyword) => {
    const filteredItems = users.filter((data) =>
      data.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setUsersDisplay(filteredItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-6 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Tabel Jawaban</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        No.
                      </th>
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
                    {usersDisplay?.map((user, index) => (
                      <tr key={index}>
                        <td className="p-2 align-middle text-center bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            {index + 1}
                          </p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <div className="px-2 py-1">
                            <div>
                              <img
                                src={
                                  user.photo ? user.photo : "/images/man.png"
                                }
                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                                alt={user.name}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                            {user.name}
                          </p>
                        </td>
                        <td className="p-2 flex justify-center gap-3 bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                          <button
                            className={`btn-danger-lite`}
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
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
