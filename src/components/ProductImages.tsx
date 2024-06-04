"use client";

import { images } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {/* Top */}
      <div className="bg-n-7 backdrop-blur-md h-[500px] w-full p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="h-full relative">
          <Image src={images[index].url} alt="Product" fill sizes="50vw" className="object- rounded-md" />
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-n-7 backdrop-blur-md flex gap-4 mt-3 p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {images.map((img, i) => (
          <div key={img.id} onClick={() => setIndex(i)} className="w-1/4 h-32 relative gap-4">
            <Image src={img.url} alt="Product" fill sizes="50vw" className="object- rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
