"use client";

import { images } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-violet-500">
      {/* Top */}
      <div className="bg-rose-500 h-[500px] relative">
        <Image src={images[index].url} alt="Product" fill sizes="50vw" className="object- rounded-md" />
      </div>
      {/* Bottom */}
      <div className="bg-gray-500 flex gap-4">
        {images.map((img, i) => (
          <div key={img.id} onClick={() => setIndex(i)} className="w-1/4 h-32 relative gap-4 mt-5">
            <Image src={img.url} alt="Product" fill sizes="50vw" className="object- rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
