"use client";
import React, {useEffect, useState} from 'react'
import {initFlowbite} from 'flowbite';
import Link from "next/link";
import {usePathname, useRouter} from 'next/navigation';

export default function Sidebar() {
    const path = usePathname()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    const logout = () => {
        if (loading) {
            return;
        }
        setLoading(true)
        localStorage.clear()
        setLoading(false);
        router.push('/auth/login')
    }

    useEffect(() => {
        initFlowbite();

        if(typeof window !== 'undefined'){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    return (
        <section className={`font-poppins`}>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-10 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full flex flex-col justify-between p-12 overflow-y-auto bg-primary text-white">
                    <div className={`pl-4 `}>
                        <img src={user?.photo ? process.env.NEXT_PUBLIC_STORAGE + user?.photo : '/images/man.png'}
                             className={`w-[80px] h-[80px] object-cover rounded-xl`} alt=""/>
                        <h1 className={`font-boldf text-2xl mt-5`}>{user?.name}</h1>
                        <h4 className={`sm:text-md text-gray-400`}>{user?.email}</h4>
                        <p className='text-sm text-yellow-400'>{user?.point} Poin</p>
                    </div>
                    <ul className="space-y-2 font-medium text-lg">
                        <li>
                            <Link
                                href="/home"
                                className={`${path === '/home'
                                    ? 'group active-menu'
                                    : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="ml-3">Beranda</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/news"
                                className={`${path === '/news'
                                    ? 'group active-menu'
                                    : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Berita</span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/about-us"
                                className={`${path === '/about-us'
                                    ? 'group active-menu'
                                    : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="ml-3">Tentang Kami</span>
                            </a>
                        </li>
                        <li>
                            <Link
                                href="/quiz"
                                className={`${path === '/quiz'
                                    ? 'group active-menu'
                                    : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Quiz</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/rewards"
                                className={`${path === '/historyRewards'
                                    ? 'group active-menu'
                                    : 'flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Riwayat Hadiah</span>
                            </Link>
                        </li>
                        <li className={`-mb-10`}>
                            <Link
                                href="/profiles"
                                className={`${path === '/profiles'
                                    ? 'mb-28 group active-menu'
                                    : 'mb-28 flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 group'
                                }`}
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Pengaturan Akun</span>
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="cursor-pointer flex items-center p-2 text-red-500 rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-gray-100 group"
                        onClick={logout}
                    >
                        <span className="flex-1 ml-3 whitespace-nowrap">Keluar</span>
                    </div>
                </div>
            </aside>
        </section>)
}
