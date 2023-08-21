"use client";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import '@/public/css/parallax.css'
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined"){
      const parallax_el = document.querySelectorAll('.parallax');
  
      let xValue = 0,
        yValue = 0,
        zValue = 0;
  
      let rotateDegree = 0;
  
      // Declare timeline before the update function
      let timeline = gsap.timeline();
  
      function update(cursorPosition) {
        parallax_el.forEach((el) => {
          const speedX = el.dataset.speedX;
          const speedY = el.dataset.speedY;
          const speedZ = el.dataset.speedZ;
          const rotateSpeed = el.dataset.rotation;
  
          let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2;
          zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
  
          el.style.transform = `translateX(calc(-50% + ${-xValue * speedX}px)) 
          translateY(calc(-50% + ${yValue * speedY}px))
          perspective(2300px)
          rotateY(${rotateDegree * rotateSpeed}deg)
          translateZ(${zValue * speedZ}px)`;
        });
      }
  
      update(0);
  
      function handleMouseMove(e) {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
  
        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
  
        if (timeline.isActive()) {
          return;
        }
  
        update(e.clientX);
      }
  
      window.addEventListener('mousemove', handleMouseMove);
  
      // Array.from(parallax_el).filter((el) => !el.classList.contains('text')).forEach((el) => {
      //   timeline.from(el, {
      //     top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      //     duration: 3.5,
      //     ease: 'power3.out',
      //   }, '1');
      // });
  
      timeline.from('.text-parallax h1', {
        y: window.innerHeight - document.querySelector('.text-parallax h1').getBoundingClientRect().top + 200,
        duration: 2,
      }, '2.5').from('.text-parallax h2', {
        y: -150,
        opacity: 0,
        duration: 1.5,
      }, '3').from('.hide', {
        opacity: 0,
        duration: 1.5,
      }, '3.5').from('.text-parallax button', {
        y: window.innerHeight - document.querySelector('.text-parallax button').getBoundingClientRect().top + 200,
        duration: 2,
      }, '3');
      
      return () => {
        // Clean up the event listener when the component unmounts
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

  }, []);

  return (
    <main>
      <div className="vignette hide"></div>
      <img
        src="/images/parallax/background.png"
        data-distance="-200"
        data-rotation="0"
        data-speed-x="0.3"
        data-speed-z="0"
        data-speed-y="0.38"
        alt="bg"
        className="parallax bg-img"
      />
      <img
        src="/images/parallax/fog_7.png"
        data-distance="850"
        data-rotation="0"
        data-speed-x="0.27"
        data-speed-z="0"
        data-speed-y="0.32"
        alt="bg"
        className="parallax fog-7"
      />
      <img
        src="/images/parallax/mountain_10.png"
        data-distance="1100"
        data-rotation="0"
        data-speed-x="0.195"
        data-speed-z="0"
        data-speed-y="0.305"
        alt="bg"
        className="parallax mountain-10"
      />
      <img
        src="/images/parallax/fog_6.png"
        data-distance="1400"
        data-rotation="0"
        data-speed-x="0.1"
        data-speed-z="0"
        data-speed-y="0.1"
        alt="bg"
        className="parallax fog-6"
      />
      <img
        src="/images/parallax/mountain_9.png"
        data-distance="1700"
        data-rotation="0.02"
        data-speed-x="0.125"
        data-speed-y="0.155"
        data-speed-z="0.15"
        alt="bg"
        className="parallax mountain-9"
      />
      <img
        src="/images/parallax/mountain_8.png"
        data-distance="1800"
        data-rotation="0.02"
        data-speed-x="0.1"
        data-speed-z="0"
        data-speed-y="0.11"
        alt="bg"
        className="parallax mountain-8"
      />
      <img
        src="/images/parallax/fog_5.png"
        data-distance="1900"
        data-rotation="0"
        data-speed-x="0.16"
        data-speed-z="0"
        data-speed-y="0.105"
        alt="bg"
        className="parallax fog-5"
      />
      <img
        src="/images/parallax/mountain_7.png"
        data-distance="2000"
        data-rotation="0.09"
        data-speed-x="0.1"
        data-speed-z="0"
        data-speed-y="0.1"
        alt="bg"
        className="parallax mountain-7"
      />

      <div
        className="text-parallax parallax"
        data-distance="0"
        data-rotation="0.11"
        data-speed-x="0.07"
        data-speed-z="0"
        data-speed-y="0.07"
      >
        <h2>exsantara</h2>
        <h1>explore nusantara</h1>
        <button type="button" className="btn-action text-white pointer-events-auto cursor-pointer mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm md:text-lg lg:text-xl xl:text-2xl px-5 py-2.5 text-center mr-2 mb-2">
          <Link href={'/auth/login'} className="pointer-events-auto">Mulai Jelajahi</Link>
        </button>
      </div>

      <img
        src="/images/parallax/mountain_6.png"
        data-distance="2300"
        data-rotation="0.12"
        data-speed-x="0.065"
        data-speed-y="0.05"
        data-speed-z="0.05"
        alt="bg"
        className="parallax mountain-6"
      />
      <img
        src="/images/parallax/fog_4.png"
        data-distance="2400"
        data-rotation="0"
        data-speed-x="0.135"
        data-speed-z="0"
        data-speed-y="0.032"
        alt="bg"
        className="parallax fog-4"
      />
      <img
        src="/images/parallax/mountain_5.png"
        data-distance="2550"
        data-rotation="0.1"
        data-speed-x="0.08"
        data-speed-y="0.1"
        data-speed-z="0.03"
        alt="bg"
        className="parallax mountain-5"
      />
      <img
        src="/images/parallax/fog_3.png"
        data-distance="2800"
        data-rotation="0"
        data-speed-x="0.11"
        data-speed-z="0"
        data-speed-y="0.018"
        alt="bg"
        className="parallax fog-3"
      />
      <img
        src="/images/parallax/mountain_4.png"
        data-distance="3200"
        data-rotation="0.14"
        data-speed-x="0.059"
        data-speed-y="0.024"
        data-speed-z="0.024"
        alt="bg"
        className="parallax mountain-4"
      />
      <img
        src="/images/parallax/mountain_3.png"
        data-distance="3400"
        data-rotation="0.05"
        data-speed-x="0.04"
        data-speed-y="0.018"
        data-speed-z="0.32"
        alt="bg"
        className="parallax mountain-3"
      />
      <img
        src="/images/parallax/fog_2.png"
        data-distance="3600"
        data-rotation="0"
        data-speed-x="0.15"
        data-speed-z="0"
        data-speed-y="0.0115"
        alt="bg"
        className="parallax fog-2"
      />
      <img
        src="/images/parallax/mountain_2.png"
        data-distance="3800"
        data-rotation="0.15"
        data-speed-x="0.0235"
        data-speed-y="0.013"
        data-speed-z="0.42"
        alt="bg"
        className="parallax mountain-2"
      />
      <img
        src="/images/parallax/mountain_1.png"
        data-distance="4000"
        data-rotation="0.2"
        data-speed-x="0.027"
        data-speed-y="0.018"
        data-speed-z="0.53"
        alt="bg"
        className="parallax mountain-1"
      />
      <img
        src="/images/parallax/sun_rays.png"
        alt="bg"
        className="sun-rays hide"
      />
      <img
        src="/images/parallax/black_shadow.png"
        alt="bg"
        className="black-shadow hide"
      />
      <img
        src="/images/parallax/fog_1.png"
        data-distance="4200"
        data-rotation="0"
        data-speed-x="0.12"
        data-speed-z="0"
        data-speed-y="0.01"
        alt="bg"
        className="parallax fog-1"
      />
    </main>
  );
}
