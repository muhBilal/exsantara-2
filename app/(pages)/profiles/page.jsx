"use client";
import React, {Component, useEffect, useState} from "react";
import Layouts from "components/Layouts";
import {BiSolidPencil} from "react-icons/bi";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
})
const Page = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const router = useRouter();

    const [imageFile, setImageFile] = useState(null);
    const [tempImage, setTempImage] = useState(null);

    const handleInputImage = (e) => {
        if (e.target.files[0]) {
        const src = URL.createObjectURL(e.target.files[0]);
        setTempImage(src);
        setImageFile(e.target.files[0]);
        }
    };

    const handleUpdate = async (data) => {
        if (loading) return;
        if (imageFile === null) {
            alert("Gambar berita tidak boleh kosong!");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("photo", imageFile);

        try {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_API + "/users/update/" + user?.id,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if(typeof window !== 'undefined'){
                localStorage.setItem('user', JSON.stringify(res.data.data));
            }

            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "Your profile has been updated",
                showConfirmButton: false,
                timer: 1500
            })

            router.push('/home');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            })

            console.log(error);
        }

        setLoading(false);
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const getDataUser = JSON.parse(localStorage.getItem("user"));
            setUser(getDataUser);
            setImageFile(getDataUser.photo);
            setValue('name', getDataUser.name);
            setValue('email', getDataUser.email);
        }
    }, [])

    return (
        <Layouts>
            <section className={`h-full`}>
                <div className={`container`}>
                    <h1 className={`title`}>Profile</h1>
                    <form className={`px-3 sm:px-12 mt-14`}>
                        <div
                            className={`flex gap-3 items-center mb-5 text-sm font-medium text-gray-900`}
                        >
                            <label htmlFor={`photo`} className={"relative cursor-pointer"}>
                            <img
                                src={
                                    tempImage ? tempImage : process.env.NEXT_PUBLIC_STORAGE + imageFile
                                }
                                className={`w-[80px] h-[80px] object-cover rounded-xl`}
                                alt="profiles"
                            />
                                <div
                                    className={`absolute -bottom-2 -right-2 cursor-pointer border border-primary bg-white rounded-full p-1`}
                                >
                                    <input
                                        type="file"
                                        id="photo"
                                        className="hidden"
                                        onChange={handleInputImage}
                                    />
                                    <BiSolidPencil/>
                                </div>
                            </label>
                            <span>Foto Profile</span>
                        </div>
                        <div className="mb-6 w-full">
                            <label
                                htmlhtmlFor="firstname"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50dark:-lig0 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={user?.name}
                                {...register("name")}
                            />
                            {
                                errors.name && (
                                    <p className="text-500 mt-3">
                                        {
                                            errors.name.message
                                        }
                                    </p>
                                )
                            }
                        </div>
                        <div className="mb-6">
                            <label
                                htmlhtmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                defaultValue={user?.email}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
                                {...register("email")}
                            />
                            {
                                errors.email && (
                                    <p classemail="text-500 mt-3">
                                        {
                                            errors.email.message
                                        }
                                    </p>
                                )
                            }
                        </div>
                        <button onClick={handleSubmit(handleUpdate)} className="btn-primary text-sm">
                            Simpan
                        </button>
                    </form>
                </div>
            </section>
        </Layouts>
    );
}

export default Page;
