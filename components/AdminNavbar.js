"use client";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AdminNavbar = () => {
  return (
    <nav
        className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
        navbar-main=""
        navbar-scroll="false"
    >
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
            <h6 className="mb-0 font-bold text-white capitalize text-2xl">
            Dashboard
            </h6>
        </nav>
        <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
            </div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                <li className="flex items-center">
                    <a
                    href="/admin/dashboard"
                    className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                    >
                    <span className="hidden sm:inline">Halo, Admin</span>
                    <FontAwesomeIcon icon={faUser} className='sm:ml-1' />
                    </a>
                </li>
                <li className="flex items-center pl-4 xl:hidden">
                    <a
                    href="#"
                    className="block p-0 text-sm text-white transition-all ease-nav-brand"
                    sidenav-trigger=""
                    >
                    <div className="w-4.5 overflow-hidden">
                        <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                        <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all" />
                        <i className="ease relative block h-0.5 rounded-sm bg-white transition-all" />
                    </div>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default AdminNavbar