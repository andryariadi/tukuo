"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { div } from "three/examples/jsm/nodes/Nodes.js";

type PropsAdd = {
  productId: string;
  variantId: string;
  stockNumber: number;
};

const Add = ({ productId, variantId, stockNumber }: PropsAdd) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    }

    if (type === "inc" && quantity < stockNumber) {
      setQuantity(quantity + 1);
    }
  };

  const wixClient = useWixClient();
  const addItem = async () => {
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });
  };

  return (
    <div className="bg-rse-500 font-sans flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-n-8 backdrop-blur-md w-32 py-2 px-4 rounded-3xl flex items-center justify-between text-n-3 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
            <button className="text-xl" onClick={() => handleQuantity("dec")}>
              -
            </button>
            {quantity}
            <button className="text-xl" onClick={() => handleQuantity("inc")}>
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span> left! <br /> {"Don't"} miss it
            </div>
          )}
        </div>

        <button
          onClick={addItem}
          className="group flex items-center justify-start w-11 h-11 bg-n-8 hover:bg-logo rounded-full border-[1.5px] border-logo cursor-pointer relative overflow-hidden transition-all duration-150 shadow-lg hover:w-36 hover:rounded-lg active:translate-x-1 active:translate-y-1"
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <FaCartPlus size={20} className="text-logo group-hover:text-n-2" />
          </div>
          <div className="absolute right-3 transform translate-x-full opacity-0 text-logo group-hover:text-n-2 text-sm font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default Add;
