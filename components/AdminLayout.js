"use client";
import { initFlowbite } from "flowbite";
import React, { useEffect } from "react";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({children}) => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <div className="fixed top-0 w-full bg-primary dark:hidden min-h-75" />

      {/* sidebar */}
      <AdminSidebar />
      {/* endsidebar */}

      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        
        {/* nav */}
        <AdminNavbar />
        {/* endnav */}
        

        {/* content */}
        <div className="w-full px-6 py-6 mx-auto">
          {children}
        </div>
        {/* endcontent */}

        {/* footer */}
        <AdminFooter />
        {/* endfooter */}
      </main>
    </div>
  );
};

export default AdminLayout;
