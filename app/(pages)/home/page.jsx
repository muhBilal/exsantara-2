"use client";
import React, { useEffect } from "react";
import Layouts from "components/Layouts";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        router.push("/auth/login");
      }
    }
  }, []);
  return (
    <Layouts>
      <div className={`h-full`}>
        <div className={`container`}>
          <section
            className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-3`}
          >
            <h1 className={`title`}>Beranda</h1>
          </section>
          <section className="flex mx-auto flex-col md:flex-row gap-5 mt-0 md:mt-5">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <div className="group">
                <div
                  className={`mt-10 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/animal.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Hewan
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Jelajahi beragam hewan dari seluruh provinsi. Dari mamalia
                      eksotis hingga reptil yang misterius, yang telah kami
                      kumpulkan untuk kaamu nikmati
                    </p>
                    <Link
                      href="/animals"
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hover:mt-10">
                <div
                  className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/plants.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Tumbuhan
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Menghampiri kerajaan tumbuhan yang menakjubkan. Dari hutan
                      hujan tropis yang rimbun hingga padang rumput luas yang
                      hijau.
                    </p>
                    <Link
                      href={`/vegetations`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hover:mt-10">
                <div
                  className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/food1.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Makanan
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Mengenal dunia kuliner yang kaya rasa dan aroma. Dari
                      hidangan tradisional yang lezat hingga kreasi modern yang
                      memukau.
                    </p>
                    <Link
                      href={`/foods`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hover:mt-10">
                <div
                  className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/food1.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Soal
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Mengenal dunia kuliner yang kaya rasa dan aroma. Dari
                      hidangan tradisional yang lezat hingga kreasi modern yang
                      memukau.
                    </p>
                    <Link
                      href={`/quiz`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <div className="group">
                <div
                  className={`mt-10 z-30 bg-white h-[320px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[320px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/tari.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Tari
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selamat datang di dunia tari yang memukau. Menjelajahi
                      ragam gerakan, budaya, dan ekspresi yang terabadikan dalam
                      setiap tarian.
                    </p>
                    <Link
                      href={`/dances`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hover:mt-10">
                <div
                  className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/destination.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Destinasi
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Tenemukan petualangan di setiap sudut dunia. Dari puncak
                      gunung yang menantang hingga pantai berpasir putih yang
                      menenangkan
                    </p>
                    <Link
                      href={`/destinations`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              {/*<div className="group hover:mt-10">*/}
              {/*  <div*/}
              {/*    className={`mt-5 z-30 bg-white h-[290px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg*/}
              {/*  transition duration-500 ease-in-out`}*/}
              {/*  >*/}
              {/*    <img*/}
              {/*      src="/images/city.jpg"*/}
              {/*      alt="animal"*/}
              {/*      className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 */}
              {/*    group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] */}
              {/*    transition duration-500 ease-in-out transform-gpu`}*/}
              {/*    />*/}
              {/*    <div*/}
              {/*      className={*/}
              {/*        "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"*/}
              {/*      }*/}
              {/*    >*/}
              {/*      <h1*/}
              {/*        className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}*/}
              {/*      >*/}
              {/*        Kota*/}
              {/*      </h1>*/}
              {/*      <p*/}
              {/*        className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}*/}
              {/*      >*/}
              {/*        Mengenali pesona kota-kota yang memancarkan keunikan*/}
              {/*        budaya dan arsitektur mereka. Dari jalan-jalan berliku di*/}
              {/*        pasar tradisional.*/}
              {/*      </p>*/}
              {/*      <Link*/}
              {/*        href={`/cities`}*/}
              {/*        className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}*/}
              {/*      >*/}
              {/*        Selengkapnya*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <div className="group">
                <div
                  className={`mt-10 z-30 bg-white h-[250px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[320px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/music.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Musik
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Di sinilah harmoni tercipta. Menyelami beragam genre
                      musik, dari klasik hingga pop, dari rock hingga jazz
                    </p>
                    <Link
                      href={`/musics`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hover:mt-10">
                <div
                  className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg
                transition duration-500 ease-in-out`}
                >
                  <img
                    src="/images/artifacts.jpg"
                    alt="animal"
                    className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 
                  group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] 
                  transition duration-500 ease-in-out transform-gpu`}
                  />
                  <div
                    className={
                      "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"
                    }
                  >
                    <h1
                      className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}
                    >
                      Artefak
                    </h1>
                    <p
                      className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Merentasi waktu dengan melihat ke masa lalu melalui mata
                      artefak. Setiap benda adalah jendela ke sejarah yang
                      menghidupkan kembali cerita-cerita zaman dahulu.
                    </p>
                    <Link
                      href={`/artefacts`}
                      className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
              {/*<div className="group hover:mt-10">*/}
              {/*  <div*/}
              {/*    className={`mt-5 z-30 bg-white h-[270px] relative p-5 rounded-xl shadow-sm w-full group-hover:h-[310px] group-hover:shadow-lg*/}
              {/*  transition duration-500 ease-in-out`}*/}
              {/*  >*/}
              {/*    <img*/}
              {/*      src="/images/province.jpg"*/}
              {/*      alt="animal"*/}
              {/*      className={`h-[70%] w-[90%] object-cover rounded-xl absolute top-5 left-1/2 -translate-x-1/2 */}
              {/*    group group-hover:-translate-y-1/2 group-hover:w-[250px] group-hover:h-[140px] */}
              {/*    transition duration-500 ease-in-out transform-gpu`}*/}
              {/*    />*/}
              {/*    <div*/}
              {/*      className={*/}
              {/*        "group text-center w-full px-5 absolute bottom-5 left-1/2 -translate-x-1/2 group-hover:bottom-10 transition duration-500 ease-in-out transform-gpu"*/}
              {/*      }*/}
              {/*    >*/}
              {/*      <h1*/}
              {/*        className={`group text-center mt-2 mb-2 font-semibold text-lg text-primary transition duration-1000 ease-in-out`}*/}
              {/*      >*/}
              {/*        Provinsi*/}
              {/*      </h1>*/}
              {/*      <p*/}
              {/*        className={`group hidden text-sm mb-3 group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}*/}
              {/*      >*/}
              {/*        Mendalami kekayaan budaya dan keindahan alam di setiap*/}
              {/*        provinsi. Dari pegunungan yang menakjubkan hingga upacara*/}
              {/*        adat yang kental, mari menjelajahi pesona Indonesia*/}
              {/*      </p>*/}
              {/*      <Link*/}
              {/*        href={`/provinces`}*/}
              {/*        className={`group mx-auto hidden btn-primary-lite text-sm group-hover:block transition duration-1000 ease-in-out opacity-0 group-hover:opacity-100`}*/}
              {/*      >*/}
              {/*        Selengkapnya*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </section>
        </div>
      </div>
    </Layouts>
  );
};

export default Page;
