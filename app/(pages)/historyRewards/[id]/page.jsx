  "use client";
import Layouts from "@/components/Layouts";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Layouts>
      <div className="container-center">
      <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/home"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 mr-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Hadiah
                  </Link>
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
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Items
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
        <section className="flex gap-5">
          <div className="w-[30%]">
            <img
              src="/images/art.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-xl"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl mb-5">Robot</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam facilis in, officiis iure ipsam asperiores necessitatibus unde velit dignissimos dolorum voluptatem enim earum repellendus eius voluptate delectus! Suscipit, ut cupiditate quos placeat fugit ab blanditiis a quae, molestias, voluptatibus error quibusdam corrupti tempore. Distinctio unde in veritatis facere aspernatur consectetur fugit eum nulla delectus, provident sed quibusdam ipsam sequi illum hic impedit, eos explicabo nisi aliquam magnam saepe, corporis nostrum quasi. Fugiat voluptatibus tempore vitae doloribus? Ducimus laudantium quam eos, atque, sapiente optio delectus ipsam error, suscipit cum laborum ut rerum. Dolores voluptates animi saepe aliquid, corporis totam voluptate!
            </p>
            <div className="my-5 w-85">
              <h1 className="text-blue-500 text-center mt-5">
                50 dari 1000 poin
              </h1>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-yellow-300 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <button className="btn-primary-lite">Tukar Sekarang</button>
            <button className="btn-primary-lite">Tukar Sekarang</button>
          </div>
        </section>
      </div>
    </Layouts>
  );
}
