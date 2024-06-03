"use client";

import { slides } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-rose-500 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="bg-violet-500 w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((item) => (
          <div key={item.id} className={`${item.bg} w-screen h-full flex flex-col xl:flex-row gap-16`}>
            {/* Text Container */}
            <div className="bg-amber-500 h-1/2 xl:w-1/2">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{item.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl">{item.title}</h1>
              <Link href={item.url}>
                <button>SHOP NOW</button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="bg-gray-600 relative h-1/2 xl:w-1/2">
              <Image src={item.img} alt={item.title} fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
