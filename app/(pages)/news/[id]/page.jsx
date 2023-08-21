'use client';
import Layouts from "@/components/Layouts";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {FaShare, FaRegBookmark, FaBookmark} from "react-icons/fa";
import axios from "axios";
import {initFlowbite} from "flowbite";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import "react-quill/dist/quill.snow.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return (
        <div className="flex flex-col w-full justify-center align-middle h-full">
            <FontAwesomeIcon icon={faCircleXmark} spin size="2xl"/>
            <h1 className="font-semibold text-center mt-3">Data Tidak Ditemukan</h1>
        </div>
    );
};

export default function page({params}) {
    const [news, setNews] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [shuffle, setShuffle] = useState([]);
    const [message, setMessage] = useState("");
    const fetchData = async () => {
        const options = {year: 'numeric', month: 'long', day: 'numeric'}
        const res = await axios.get(process.env.NEXT_PUBLIC_API + '/news');
        setNews(res.data.data);

        const res_data = await axios.get(process.env.NEXT_PUBLIC_API + '/news/' + params.id);
        const data = res_data.data.data;
        data.createdAt = new Date(data.created_at).toLocaleDateString('id-ID', options);
        setNewsData(data)
    }

    const shuffleNews = async (news) => {
        if (news) {
            const shuffled = [...news]; // Create a shallow copy of the news array
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
            }
            setShuffle(shuffled.slice(0, 3));
        }
    }

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'URL Copied!',
                text: 'The URL has been copied to the clipboard.',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }).catch((error) => {
            console.error('Error copying URL to clipboard:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while copying the URL.',
            });
        });
    };

    const handleComment = () => {
        const uid = localStorage.getItem('id');
        const news_id = params.id;
        const res = axios.post(process.env.NEXT_PUBLIC_API + '/news/comments', {
            user_id: uid,
            news_id: news_id,
            message: message
        });
        Swal.fire("Komentar berhasil dikirim!", "", "success");
        fetchData()
        setMessage('')
    }

    const handleQuillChange = (newContent) => {
        setMessage(newContent);
    };

    useEffect(() => {
        fetchData();
        initFlowbite();
    }, []);

    useEffect(() => {
        shuffleNews(news)
    }, [news, newsData]);

    return (
        <Layouts>
            {
                newsData?.length === 0 ? <NotFound/> : (
                    <div className="h-full">
                        <div className={`pl-5 pt-0 sm:pl-24 pr-5 pb-10 mx-auto h-full`}>
                            <nav className="flex my-4" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a
                                            href="/home"
                                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-3 h-3 mr-2.5"

                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                            </svg>
                                            Beranda
                                        </a>
                                    </li>
                                    <li>
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
                                            <a
                                                href="/news"
                                                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                Berita
                                            </a>
                                        </div>
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
                                            <span
                                                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                                {newsData.name}
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>

                            <section className={`flex flex-col md:flex-row gap-5 mt-2`}>
                                <div className={`w-full md:w-[80%] pr-0 md:pr-5`}>
                                    <div className={`bg-white rounded-xl `}>
                                        <img
                                            src={process.env.NEXT_PUBLIC_STORAGE + newsData.image}
                                            alt="animal"
                                            className={`w-full h-[300px] object-cover rounded-t-xl`}
                                        />

                                        <div
                                            className={`bg-white pb-10 pt-5 rounded-b-xl  flex flex-col md:flex-row`}
                                        >
                                            <div className={`w-full pr-3 px-6`}>
                                                <div className={`flex gap-5 items-center mb-3`}>
                                                    <span
                                                        class="bg-blue-100 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Berita</span>
                                                    <h1 className={`text-gray-400 text-sm`}>{newsData.createdAt}</h1>
                                                </div>
                                                <div className={`flex w-full justify-between gap-3`}>
                                                    <h1
                                                        className={`font-bold text-xl md:text-3xl leading-6 md:leading-10 mb-5`}
                                                    >
                                                        {newsData.name}
                                                    </h1>
                                                    <div className={`flex gap-3 items-start`}>
                                                        <div className={`flex justify-center items-center`}>
                                                            <span className="mr-3">Bagikan</span> 
                                                            <div
                                                                onClick={handleShare}
                                                                className={`border-2 p-2 border-gray-400 rounded-full cursor-pointer mx-auto group hover:bg-primary`}
                                                            >
                                                                <FaShare
                                                                    className={`mx-auto  group-hover:text-white`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`text-gray-500 text-lg`}
                                                     dangerouslySetInnerHTML={{__html: newsData.desc}}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`bg-white rounded-xl my-7`}>
                                        <div
                                            className={`bg-white pb-10 pt-5 rounded-xl  flex flex-col md:flex-row`}
                                        >
                                            <div className={`pr-3 px-6`}>
                                                <h1 className={`text-primary font-bold text-xl md:text-3xl leading-6 md:leading-10 mb-6`}>
                                                    Galeri Berita
                                                </h1>

                                                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {
                                                        newsData.galleries?.map(item => (
                                                            <div>
                                                                <img class="h-auto max-w-full rounded-lg"
                                                                     src={process.env.NEXT_PUBLIC_STORAGE + item.image}
                                                                     alt="animal"/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`bg-white rounded-xl my-7`}>
                                        <div
                                            className={`bg-white pb-10 pt-5 rounded-xl pr-3`}
                                        >
                                            <div className={`pr-3 px-6`}>
                                                <h1 className={`text-primary font-bold text-xl md:text-3xl leading-6 md:leading-10 mb-6`}>
                                                    Komentar
                                                </h1>

                                                <div className={`flex flex-col gap-3 mb-10`}>
                                                    {
                                                        newsData.comments?.map(item => (
                                                            <div className={`flex gap-3`}>
                                                                <img
                                                                    src="/images/man.jpg"
                                                                    alt="profile"
                                                                    className={`w-[50px] h-[50px] object-cover rounded-full`}
                                                                />
                                                                <div
                                                                    className={`bg-gray-200 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded px-3 py-2`}
                                                                >
                                                                    <h1 className={`font-semibold text-sm`} dangerouslySetInnerHTML={{__html : item.message}}/>
                                                                    <h6 className={`text-gray-500 text-sm`}>Nama</h6>
                                                                </div>
                                                            </div>

                                                        ))
                                                    }
                                                </div>

                                                <ReactQuill
                                                    id={"desc"}
                                                    theme="snow"
                                                    value={message}
                                                    onChange={handleQuillChange}
                                                    className="h-48 mb-13 w-full"
                                                />
                                                <button className={`btn-primary-lite`} onClick={handleComment}>Kirim
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`w-full md:w-[30%] border-l-0 border-r-0 md:border-l-2 md:border-r-2 px-5 md:mt-0`}
                                >
                                    <div className={`flex justify-between mb-5 items-center`}>
                                        <h1 className={`font-bold text-xl`}>Berita Lainnya</h1>
                                        <Link href={`/news`} className={`text-blue-500 text-sm`}>
                                            See More
                                        </Link>
                                    </div>
                                    <div className={`flex flex-col gap-5`}>
                                        {shuffle.map((news, index) => (
                                            <div key={index} className="hover:shadow-md transition-all">
                                                <Link href={'/news/' + news.id}>
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_STORAGE}${news.image}`}
                                                        alt="news"
                                                        className={`w-full h-[150px] object-cover rounded-tl-lg rounded-tr-lg`}
                                                    />
                                                    <div className="bg-white rounded-bl-lg rounded-br-lg p-2">
                                                        <h5 className={`text-gray-900 text-xl font-bold my-2`}>
                                                            {
                                                                news?.name?.length > 15 ? news?.name?.substring(0, 15) + '...' : news.name
                                                            }
                                                        </h5>
                                                        <div className={`text-gray-500 text-sm`}
                                                             dangerouslySetInnerHTML={{__html: news.desc.substring(0, 100) + '...'}}/>
                                                    </div>
                                                </Link>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }
        </Layouts>
    );
}
