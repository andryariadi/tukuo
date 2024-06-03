"use client";

import { slides } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((item) => (
          <div key={item.id} className={`${item.bg} w-screen h-full flex flex-col xl:flex-row gap-16`}>
            {/* Text Container */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{item.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl">{item.title}</h1>
              <Link href={item.url}>
                <button className="bg-n-7 py-3 px-4 rounded-md border border-n-1/5 text-n-1 uppercase">Shop Now</button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image src={item.img} alt={item.title} fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      {/* Button Slider */}
      <div className="absolute left-1/2 bottom-8 flex gap-4">
        {slides.map((item, index) => (
          <div key={item.id} onClick={() => setCurrent(index)} className={`w-3 h-3 flex items-center justify-center rounded-full ring-1 ring-gray-600 cursor-pointer ${current === index ? "scale-150" : ""}`}>
            {current === index && <div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;