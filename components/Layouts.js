'use client';
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { initFlowbite } from 'flowbite'

export default function Layouts({ children }) {
  useEffect(() => {
    initFlowbite();
  })

  return (
    <>
      <div className={`bg-primary`}>
        <Sidebar />
        <section className={`bg-primary h-screen p-5 sm:ml-72`}>
            <div className={`bg-gray-100 h-full rounded-xl overflow-auto`}>
                {children}
            </div>
        </section>
      </div>
    </>
  )
}
