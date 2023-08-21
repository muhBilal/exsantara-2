'use client';
import Layouts from '@/components/Layouts'
import React, {useState, useEffect} from 'react'
import Link from "next/link";
import {FaShare} from "react-icons/fa";
import axios from "axios";
import {initFlowbite} from "flowbite";

export default function page() {
    const [news, setNews] = useState([]);
    const fetchData = async () => {
        const res = await axios.get(
            process.env.NEXT_PUBLIC_API + "/news/front"
        );
        setNews(res.data.data);
    };

    useEffect(() => {
        fetchData();
        initFlowbite();
    }, []);

    useEffect(() => {
        console.log(news);
    }, [news]);

    return (
        <Layouts>
            <div className='h-full'>
                <div className={`container`}>
                    <section className={`flex gap-5 mt-7`}>
                        <div className={`w-[40%] pr-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Hari ini</h1>
                                <Link href={`/news/list`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-10`}>
                                {news?.newsToday?.map((item, index) => (
                                    <Link key={index} href={'news/'+ item.id} className={`h-[30rem] cursor-pointer`}>
                                        <div className={`relative`}>
                                            <img src="/images/food.jpg" alt=""
                                                 className={`w-full h-[300px] object-cover rounded-xl`}/>
                                            <div className={`absolute -bottom-52 bg-white p-6 m-5 rounded-xl`}>
                                                <div className={`flex gap-5 items-center mb-3`}>
                                                    <h1 className={`text-primary font-medium text-md`}>ExSantara</h1>
                                                    <h1 className={`text-gray-400`}>{item.created_at}</h1>
                                                </div>
                                                <h1 className={`font-bold text-2xl leading-8 mb-5`}>{item.title.substring(0, 30)}...</h1>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.desc.length > 100 ? `${item.desc.substring(0, 100)}...` : item.desc,
                                                    }}
                                                    className={`text-gray-400`}
                                                />
                                                <div className={`mt-5 flex items-center justify-between pr-5`}>
                                                    <div>
                                                        <h1 className={`font-bold`}>{Math.floor(Math.random() * 10000)}</h1>
                                                        <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                                    </div>
                                                    <FaShare className={`text-xl cursor-pointer`}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={`w-[30%] border-l-2 border-r-2 px-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Semua Berita</h1>
                                <Link href={`/news/list`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-3 border-b-2 pb-4`}>
                                {news.randomNews?.map((item, index) => (
                                    <Link key={index} href={'/news/' + item.id} className={`cursor-pointer`}>
                                        <div className={`flex gap-4 mt-2 text-sm `}>
                                            <h1 className={`font-semibold text-blue-500 text-md`}>ExSantara</h1>
                                            <h6 className={`text-gray-400`}>{item.created_at}</h6>
                                        </div>
                                        <div className={`flex justify-between`}>
                                            <h1 className={`font-bold text-lg w-[80%]`}>{item.title.substring(0, 10)}...</h1>
                                                {/*<img src="/images/man.jpg" alt=""*/}
                                                {/*     className={`w-[40px] h-[40px] rounded-full object-cover`}/>*/}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={`w-[30%] border-r-2 px-5`}>
                            <div className={`flex justify-between mb-5 items-center`}>
                                <h1 className={`font-bold text-2xl`}>Berita Lainnya</h1>
                                <Link href={`/news/list`} className={`text-blue-500`}>See More</Link>
                            </div>
                            <div className={`flex flex-col gap-5`}>
                                {news.allNews?.map((item, index) => (
                                    <Link key={index} href={`/news/` + item.id} className={`cursor-pointer`}>
                                        <img src="/images/tari.jpg" className="w-full rounded-xl h-[200px] object-cover"/>
                                        <div className={`flex gap-5 items-center mt-5`}>
                                            <h1 className={`text-primary font-medium text-md`}>ExSantara</h1>
                                            <h1 className={`text-gray-400`}>{item.created_at}</h1>
                                        </div>
                                        <h1 className={`font-bold text-lg my-2`}>{item.title.substring(0, 15)}</h1>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.desc.length > 100 ? `${item.desc.substring(0, 100)}...` : item.desc,
                                            }}
                                            className={`text-gray-400`}
                                        />
                                        <div dangerouslySetInnerHTML={{__html: item.desc.substring(0, 20)}} className={`text-gray-400`}/>
                                        <div className={`mt-3 flex items-center justify-between pr-5`}>
                                            <div>
                                                <h1 className={`font-bold`}>{Math.floor(Math.random() * 10000)}</h1>
                                                <h6 className={`text-gray-400`}>Orang Melihat</h6>
                                            </div>
                                            <FaShare className={`text-xl cursor-pointer`}/>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layouts>
    )
}
