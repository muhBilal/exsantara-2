import Layouts from "@/components/Layouts";
import React from "react";

const page = () => {
  return (
    <Layouts>
        <div className="container">
            <section className={`mb-10 md:mb-24`}>
                <div className={`flex flex-col md:flex-row gap-52 items-center mb-20`}>
                    <div className={`pl-10 hidden md:block`}>
                        <h1 className={`font-semibold text-lg max-w-[62px]`}>
                        Apa itu ExSantara
                        </h1>
                    </div>
                <div className={`px-5`}>
                    <h1 className={`font-bold text-gray-900 text-5xl mb-10`}>
                    Tentang Kami.
                    </h1>
                    <div>
                    <p className={`text-gray-400 text-md mb-5`}>
                    ExSantara atau Explore Nusantara adalah sebuah aplikasi website yang dirancang untuk memperkaya pemahaman masyarakat tentang kebudayaan Indonesia. Melalui ExSantara, pengguna dapat menjelajahi berbagai aspek budaya Indonesia yang kaya dan beragam. Di dalam platform ini, pengguna dapat mengeksplorasi artefak-arkeologis, cerita-cerita tradisional, tarian-tarian adat, seni rupa, serta berita terbaru seputar perkembangan budaya di seluruh nusantara.
                    </p>
                    <p className={`text-gray-400 text-md`}>
                        {" "}
                        Tidak hanya sebagai sumber informasi, ExSantara juga berfungsi sebagai alat edukasi. Terdapat modul pembelajaran yang dirancang untuk memperkenalkan generasi muda kepada kekayaan budaya Indonesia melalui pendekatan yang menarik dan interaktif. Dengan demikian, ExSantara berperan penting dalam melestarikan dan mempromosikan kekayaan budaya Indonesia kepada masyarakat lokal maupun internasional.
                    </p>
                    </div>
                </div>
                </div>
                <img
                src="/images/mountains.jpg"
                alt="photo"
                className={`w-full h-[27rem] object-cover rounded-lg`}
                />
            </section>
            <section
                className={`mb-24 flex flex-col md:flex-row gap-5 md:gap-40 items-center justify-between`}
            >
                <div className={`w-full md:w-1/2 px-5 md:px-10`}>
                <h1 className={`font-bold text-3xl italic`}>
                    "Mengetahui budaya dan warisan adalah kunci untuk memahami suatu bangsa." <br />
                    <span className={`text-lg text-gray-400 font-normal mr-5`}>-by ExSantara</span>
                </h1>
                </div>
                <div className={`w-full md:w-1/2 flex justify-end`}>
                <img
                    src="/images/bird.jpg"
                    alt="photo"
                    className={`w-[500px] h-[250px] object-cover rounded-lg`}
                />
                </div>
            </section>
            <section
                className={`mb-24 flex flex-col md:flex-row gap-40 items-center justify-between`}
            >
                <div className={`w-full md:w-1/2 flex justify-end relative h-[33rem]`}>
                <img
                    src="/images/paskal.jpeg"
                    alt="photo"
                    className={`absolute left-0 top-0 w-[300px] h-[330px] object-cover rounded-lg`}
                />
                {/* <img
                    src="/images/bilal.jpg"
                    alt="photo"
                    className={`absolute right md:-right-16 bottom-[30%] w-[200px] h-[200px] object-cover rounded-lg`}
                /> */}
                <img
                    src="/images/bilal.jpg"
                    alt="photo"
                    className={`absolute right md:-right-16 bottom-0 w-[320px] h-[300px] object-cover rounded-lg`}
                />
                </div>
                <div className={`w-full md:w-1/2 px-5 mb-10`}>
                    <h1 className={`text-3xl font-bold mb-10`}>TIM KAMI.</h1>
                    <p className={`text-gray-400 mb-5`}>
                        Kami adalah tim dari Universitas Pembangunan Veteran Jawa Timur yang
                        terdiri dari mahasiswa informatika. Kami memiliki semangat yang tinggi dalam mengembangkan
                        website yang berkualitas dan dapat memenuhi kebutuhan klien kami.
                        Dalam mengembangkan website, kami selalu berusaha untuk memberikan
                        solusi yang inovatif dan efektif agar klien kami dapat meraih
                        kesuksesan dalam bisnisnya.
                    </p>
                    <p className={`text-gray-400`}>
                        Sebagai web developer, kami memiliki pengalaman dan kemampuan dalam
                        mengembangkan berbagai jenis website, mulai dari website perusahaan
                        hingga website e-commerce. Kami berkomitmen untuk memberikan hasil
                        terbaik dan memenuhi kebutuhan klien kami dengan solusi yang tepat
                        dan sesuai dengan budget yang dimiliki. Dengan dukungan teknologi
                        terbaru dan tim yang handal, kami siap membantu Anda dalam
                        mengembangkan website yang dapat meningkatkan performa bisnis Anda.
                    </p>
                </div>
            </section>
        </div>
    </Layouts>
  );
};

export default page;
