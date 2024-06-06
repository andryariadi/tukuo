"use client";

import { images } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  console.log(items, "<----diproductimages");

  return (
    <div>
      {/* Top */}
      <div className="bg-n-7 backdrop-blur-md h-[450px] w-full p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="h-full relative">
          <Image src={items[index].image?.url} alt={items.name} fill sizes="50vw" className="object-cover rounded-md" />
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-n-7 backdrop-blur-md flex flex-wrap gap-3 justify-between mt-2 p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {items.map((img: any, i: number) => (
          <div key={img._id} onClick={() => setIndex(i)} className="h-32 w-[23%] relative">
            <Image src={img.image?.url} alt={img.name} fill sizes="50vw" className="object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
