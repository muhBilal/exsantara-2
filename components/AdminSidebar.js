"use client";
import {
  faAward,
  faBook,
  faBowlFood,
  faCity,
  faDungeon,
  faHighlighter,
  faHouse,
  faMapLocation,
  faMapPin,
  faMusic,
  faNewspaper,
  faPaw,
  faPersonMilitaryToPerson,
  faPersonSkating,
  faRightFromBracket,
  faSeedling,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

const AdminSidebar = () => {

  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    if(typeof window !== 'undefined'){
      localStorage.clear();
      router.push('/auth/login');
    }
  }

  return (
    // <aside
    //     className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-10 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
    //     aria-expanded="false"
    //   >
      <aside
        className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0"
        aria-expanded="false"
      >
        <div className="h-19">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            sidenav-close=""
          />
          <a
            className={"block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"}
            href="/admin/dashboard"
          >
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              Dashboard Menu
            </span>
          </a>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-slate-700 transition-colors ${pathname == '/admin/dashboard' && 'bg-blue-500/13 font-semibold'}`}
                href="/admin/dashboard"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FontAwesomeIcon icon={faHouse} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/dashboard' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/provinces' && 'bg-blue-500/13'}`}
                href="/admin/provinces"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faMapLocation} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/provinces' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Provinsi
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/cities' && 'bg-blue-500/13'}`}
                href="/admin/cities"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faCity} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/cities' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Kota
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/animals' && 'bg-blue-500/13'}`}
                href="/admin/animals"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faPaw} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/animals' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Hewan Endemik
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/vegetations' && 'bg-blue-500/13'}`}
                href="/admin/vegetations"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faSeedling} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/vegetations' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Tumbuhan Endemik
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/dances' && 'bg-blue-500/13'}`}
                href="/admin/dances"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faPersonSkating} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/dances' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Tari Tradisional
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/musics' && 'bg-blue-500/13'}`}
                href="/admin/musics"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faMusic} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/musics' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Musik Daerah
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/costumes' && 'bg-blue-500/13'}`}
                href="/admin/costumes"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faPersonMilitaryToPerson} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/costumes' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Pakaian Daerah
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/destinations' && 'bg-blue-500/13'}`}
                href="/admin/destinations"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faMapPin} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/destinations' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Destinasi Favorit
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/foods' && 'bg-blue-500/13'}`}
                href="/admin/foods"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faBowlFood} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/foods' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Makanan Daerah
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/artefacts' && 'bg-blue-500/13'}`}
                href="/admin/artefacts"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58" /> */}
                  <FontAwesomeIcon icon={faDungeon} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/artefacts' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Artefak Kuno
                </span>
              </a>
            </li>
            <li className="w-full mt-4">
              <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
                Submenu Dashboard
              </h6>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/users' && 'bg-blue-500/13'}`}
                href="/admin/users"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02" /> */}
                  <FontAwesomeIcon icon={faUser} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/users' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Daftar Pengguna
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/historyRewards' && 'bg-blue-500/13'}`}
                href="/admin/rewards"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02" /> */}
                  <FontAwesomeIcon icon={faAward} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/historyRewards' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Hadiah
                </span>
              </a>
            </li>
            {/* <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/answers' && 'bg-blue-500/13'}`}
                href="/admin/answers"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <FontAwesomeIcon icon={faHighlighter} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/answers' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  List Penjawab
                </span>
              </a>
            </li> */}
            <li className="mt-0.5 w-full">
              <a
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/quiz' && 'bg-blue-500/13'}`}
                href="/admin/quiz"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04" /> */}
                  <FontAwesomeIcon icon={faBook} className={`relative top-0 text-sm leading-normal ${pathname == '/admin/quiz' && 'text-blue-500'}`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Soal
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <a
                  className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/news' && 'bg-blue-500/13'}`}
                  href="/admin/news"
              >
                <div
                    className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04" /> */}
                  <FontAwesomeIcon icon={faNewspaper}
                                   className={`relative top-0 text-sm leading-normal ${pathname == '/admin/news' && 'text-blue-500'}`}/>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Berita
                </span>
              </a>
            </li>
            <li className="mt-0.5 w-full">
              <span
              onClick={handleSignOut}
                className={`py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand hover:cursor-pointer my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 transition-colors ${pathname == '/admin/provinces' && 'bg-blue-500/13'}`}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  {/* <i className="relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection" /> */}
                  <FontAwesomeIcon icon={faRightFromBracket} className={`relative top-0 text-sm leading-normal text-red-500`} />
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-red-500">
                  Sign Out
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="mx-4">
          <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400" />
          <div
            className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
            sidenav-card=""
          >
            <img
              className="w-full mx-auto"
              src="/images/logo.png"
              alt="sidebar illustrations"
            />
          </div>
        <div className={`flex justify-center`}>
          <a
              href="/home"
              target="_blank"
              className="btn-primary-lite mx-auto"
          >
            Cek Halaman Depan
          </a>
        </div>
        </div>
    </aside>
  )
}

export default AdminSidebar