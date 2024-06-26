"use client";

import { slides } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlobeDemo } from "./ui/GridGlobe";
import { TextRevealCard } from "./ui/Text-reveal-card";

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
      {/* Item Sliders */}
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((item) => (
          <div key={item.id} className={`w-screen h-full flex flex-col lg:flex-row items-center bg-sy-500`}>
            {/* Text Container */}
            <div className="bg-ros-500 h-[40%] md:h-full w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
              <TextRevealCard text={item.title} revealText={item.description} />
              <Link href={item.url}>
                <button className="bg-black text-n-3 uppercase text-sm py-3 px-4 rounded-md border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Shop Now</button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="bg-gray-500 relative h-[60%] md:h-full w-full lg:w-1/2">{item.img === "globe" ? <GlobeDemo /> : <Image src={item.img} alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-t-md" />}</div>
          </div>
        ))}
      </div>
      {/* Button Sliders */}
      <div className="absolute left-[40%] md:left-[47.5%] bottom-5 md:bottom-8 flex gap-4">
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
