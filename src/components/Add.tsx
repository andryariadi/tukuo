"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 4;

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    }

    if (type === "inc" && quantity < stock) {
      setQuantity(quantity + 1);
    }
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
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left! <br /> {"Don't"} miss it
          </div>
        </div>

        <button className="w-max bg-n-8 text-n-3 text-sm py-3 px-4 rounded-full border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Add to Cart</button>
      </div>
    </div>
  );
};

export default Add;
