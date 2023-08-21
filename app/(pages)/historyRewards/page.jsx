"use client";
import Layouts from "@/components/Layouts";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {initFlowbite} from "flowbite";

export default function page() {
    const [rewards, setRewards] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const fetchData = async () => {
        const res = await axios.get(process.env.NEXT_PUBLIC_API + '/rewards');
        setRewards(res.data.data);
    }

    useEffect(() => {
        fetchData();
        initFlowbite();
    }, []);
    return (
        <Layouts>
            <div className="container">
                <h1 className={`title mb-10`}>Riwayat Hadiah</h1>
                <section className="grid grid-cols-3 gap-5">
                    {rewards.length === 0 && (<p className={`text-2xl`}>Belum ada hadiah yang diambil</p>)}
                    {rewards.map((reward, index) => (
                        <div className="bg-white rounded-xl hover:shadow-lg cursor-pointer">
                            <img
                                src={reward.image}
                                alt="image"
                                className="h-[230px] w-full object-cover rounded-t-xl"
                            />
                            <h1 className="mt-5 text-xl text-center">{rewards.name}</h1>
                            <div className="p-5">
                                <h1 className="text-blue-500 text-center mt-5">
                                    {user.point} dari {reward.point} poin
                                </h1>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    {user.point >= reward.point ? (
                                        <div className="bg-yellow-300 h-2.5 rounded-full w-[45%]"></div>
                                    ) : (
                                        <div className="bg-yellow-300 h-2.5 rounded-full w-[45%]"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </Layouts>
    );
}
