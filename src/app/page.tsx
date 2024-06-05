"use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProduct = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res, "<----dihome");
    };

    getProduct();
  }, [wixClient]);

  return (
    <div className="pt-[4.75rem] lg:pt-[5rem] overflow-hidden">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="text-2xl font-sans">Featured Product</h1>
        <ProductList />
      </div>
      <div className="mt-24 px-10">
        <h1 className="px-4 text-2xl font-sans">Categories</h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;
