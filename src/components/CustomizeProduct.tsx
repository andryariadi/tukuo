"use client";

import { products } from "@wix/stores";
import { useState } from "react";

type CustomizeProps = {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
};

const CustomizeProduct = ({ productId, variants, productOptions }: CustomizeProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoice = variant.choices; //color and size
      if (!variantChoice) return false;

      return Object.entries(choices).every(([key, value]) => variantChoice[key] === value) && variant.stock?.inStock && variant.stock?.quantity && variant.stock?.quantity > 0;
    });
  };

  console.log(productId, variants, productOptions, "<----dicustomize1");

  console.log(selectedOptions, "<----dicustomize2");

  return (
    <div className="bg-amber-500 font-sans flex flex-col gap-6">
      {productOptions.map((options) => (
        <div key={options.name} className="bg-sky-500 flex flex-col gap-4">
          <h4 className="font-medium">Choose a {options.name}</h4>
          <ul className="flex items-center gap-3">
            {options.choices?.map((choice) => {
              const disabled = !isVariantInStock({ ...selectedOptions, [options.name!]: choice.description! });

              const selected = selectedOptions[options.name!] === choice.description!;

              const clickHandler = disabled ? undefined : () => handleOptionSelect(options.name!, choice.description!);

              return options.name === "Color" ? (
                <li key={choice.description} onClick={clickHandler} className={`relative w-8 h-8 rounded-full ring-1 ring-n-3`} style={{ backgroundColor: choice.value, cursor: disabled ? "not-allowed" : "pointer" }}>
                  {selected && <div className="absolute w-10 h-10 rounded-full ring-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />}

                  {disabled && <div className="absolute w-10 h-[2px] bg-rose-500 rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed" />}
                </li>
              ) : (
                <li key={choice.description} onClick={clickHandler} className="py-2 px-4 rounded-md ring-1 ring-logo text-logo text-sm" style={{ cursor: disabled ? "not-allowed" : "pointer" }}>
                  {choice.description}
                </li>
              );
            })}
          </ul>

          {/* 
          <ul className="flex items-center gap-3">
            <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-rose-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-sky-500"></li>
            <li className="relative w-8 h-8 rounded-full ring-1 ring-n-3 cursor-pointer bg-green-500">
              <div className="absolute w-10 h-[2px] bg-rose-500 rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-not-allowed" />
            </li>
          </ul> */}
        </div>
      ))}

      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="py-2 px-4 rounded-md ring-1 ring-logo text-logo text-sm cursor-pointer">Small</li>
        <li className="py-2 px-4 rounded-md ring-1 ring-logo text-n-2 bg-logo text-sm cursor-pointer">Medium</li>
        <li className="py-2 px-4 rounded-md ring-1 ring-amber-900 bg-amber-900 text-n-2 text-sm cursor-not-allowed">Large</li>
      </ul> */}
    </div>
  );
};

export default CustomizeProduct;
