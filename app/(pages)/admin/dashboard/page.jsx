'use client';
import React, {useEffect, useState} from 'react'
import AdminLayout from '@/components/AdminLayout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMap, faUser, faNewspaper, faHanukiah, faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const page = () => {
    const [users, setUsers] = useState([])
    const [news, setNews] = useState([])
    const fetchData = async () => {
        const user_res = await axios.get(process.env.NEXT_PUBLIC_API + '/users')
        setUsers(user_res.data.data)

        const news_res = await axios.get(process.env.NEXT_PUBLIC_API + '/news')
        setNews(news_res.data.data)
    }

    const chartState = {
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AdminLayout>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                            Total Provinsi
                                        </p>
                                        <h1 className="mb-2 font-bold dark:text-white text-xl">
                                            38
                                        </h1>
                                        <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-blue-500">
                        Lihat detail
                      </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div
                                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                                        {/* <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" /> */}
                                        <FontAwesomeIcon icon={faMap} className='text-lg relative top-3.5 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                            Total Pengguna
                                        </p>
                                        <h5 className="mb-2 font-bold dark:text-white text-xl">
                                            {users.length}
                                        </h5>
                                        <Link href={'/admin/users'} className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-blue-500">
                        Lihat detail
                      </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div
                                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                                        {/* <i className="ni leading-none ni-world text-lg relative top-3.5 text-white" /> */}
                                        <FontAwesomeIcon icon={faUser} className='text-lg relative top-3.5 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                            Total Budaya
                                        </p>
                                        <h5 className="mb-2 font-bold dark:text-white text-xl">
                                            289
                                        </h5>
                                        <p className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-blue-500">
                        Lihat detail
                      </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div
                                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                                        {/* <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white" /> */}
                                        <FontAwesomeIcon icon={faHanukiah}
                                                         className='text-lg relative top-3.5 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                            Total Berita
                                        </p>
                                        <h5 className="mb-2 font-bold dark:text-white text-xl">
                                            {news.length}
                                        </h5>
                                        <Link href={`/admin/news`} className="mb-0 dark:text-white dark:opacity-60">
                      <span className="text-sm font-bold leading-normal text-blue-500">
                        Lihat detail
                      </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div
                                        className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                                        {/* <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white" /> */}
                                        <FontAwesomeIcon icon={faNewspaper}
                                                         className='text-lg relative top-3.5 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
                    <div
                        className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                            <h6 className="capitalize dark:text-white">Sales overview</h6>
                            <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                                <i className="fa fa-arrow-up text-emerald-500"/>
                                <span className="font-semibold">4% more</span> in 2021
                            </p>
                        </div>
                        <div className="flex-auto p-4">
                            <div>
                                <Chart
                                    options={chartState.options}
                                    series={chartState.series}
                                    type="bar"
                                    width="650"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
                    <div
                        slider=""
                        className="relative w-full h-full overflow-hidden rounded-2xl"
                    >
                        <div
                            slide=""
                            className="absolute w-full h-full transition-all duration-500"
                        >
                            <img
                                className="object-cover h-full"
                                src="/images/admin/carousel-1.jpg"
                                alt="carousel image"
                            />
                            <div
                                className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                                <div
                                    className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                                    <i className="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"/>
                                </div>
                                <h5 className="mb-1 text-white">Get started with Argon</h5>
                                <p className="dark:opacity-80">
                                    There’s nothing I really wanted to do in life that I
                                    wasn’t able to get good at.
                                </p>
                            </div>
                        </div>
                        <div
                            slide=""
                            className="absolute w-full h-full transition-all duration-500"
                        >
                            <img
                                className="object-cover h-full"
                                src="/images/admin/carousel-2.jpg"
                                alt="carousel image"
                            />
                            <div
                                className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                                <div
                                    className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                                    <i className="top-0.75 text-xxs relative text-slate-700 ni ni-bulb-61"/>
                                </div>
                                <h5 className="mb-1 text-white">
                                    Faster way to create web pages
                                </h5>
                                <p className="dark:opacity-80">
                                    That’s my skill. I’m not really specifically talented at
                                    anything except for the ability to learn.
                                </p>
                            </div>
                        </div>
                        <div
                            slide=""
                            className="absolute w-full h-full transition-all duration-500"
                        >
                            <img
                                className="object-cover h-full"
                                src="/images/admin/carousel-3.jpg"
                                alt="carousel image"
                            />
                            <div
                                className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                                <div
                                    className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                                    {/* <i className="top-0.75 text-xxs relative text-slate-700 ni ni-trophy" /> */}
                                    <FontAwesomeIcon icon={faQuoteLeft}
                                                     className='text-md relative top-0.75 text-slate-700'/>
                                </div>
                                <h5 className="mb-1 text-white text-sm">
                                    By Ampersand
                                </h5>
                                <p className="dark:opacity-80 text-lg">
                                    Mengetahui budaya dan warisan adalah kunci untuk memahami suatu bangsa.
                                </p>
                            </div>
                        </div>
                        <button
                            btn-next=""
                            className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"
                        />
                        <button
                            btn-prev=""
                            className="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 rounded-t-4">
                            <div className="flex justify-between">
                                <h6 className="mb-2 dark:text-white">Daftar Pengguna</h6>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table
                                className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                                <tbody>
                                    {
                                        users?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                                                    <div className="flex items-center px-2 py-1">
                                                        <div>
                                                            <img
                                                                src={process.env.NEXT_PUBLIC_STORAGE + item.photo}
                                                                alt={item.name}
                                                                className="object-cover w-full h-full rounded-full"
                                                            />
                                                        </div>
                                                        <div className="ml-6">
                                                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                                                Nama:
                                                            </p>
                                                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                                                {item.name}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                                    <div className="text-center">
                                                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                                            Email:
                                                        </p>
                                                        <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                                            {item.email}
                                                        </h6>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                                                    <div className="text-center">
                                                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                                            Point:
                                                        </p>
                                                        <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                                            {item.point}
                                                        </h6>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
                    <div
                        className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                        <div className="p-4 pb-0 rounded-t-4">
                            <h6 className="mb-0 dark:text-white">Daftar Berita</h6>
                        </div>
                        <div className="flex-auto p-4">
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                {
                                    news?.map((item, index) => (
                                        <li key={index} className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit">
                                            <div className="flex items-center">
                                                <div
                                                    className="inline-block w-8 h-8 mr-4 text-center text-black bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                                                    <i className="text-white ni ni-tag relative top-0.75 text-xxs"/>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white">
                                                        {
                                                            item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title
                                                        }
                                                    </h6>
                                                    <Link href={'/news/' + item.id} className="text-xs leading-tight dark:text-white/80">
                                                        <span className="font-semibold">Lihat Berita</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <button
                                                    className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white">
                                                    <i
                                                        className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default page