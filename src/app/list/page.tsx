import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 pt-[4.75rem] md:pt-[6rem] md:px-8 lg:px-16 xl:px-32">
      {/* Campain */}
      <div className="bg-n-7 backdrop-blur-md hidden sm:flex justify-between h-64 p-4 rounded-md border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
        {/* Text */}
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-sans font-semibold text-n-3 leading-snug">
            {" "}
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="bg-black text-n-1 uppercase text-sm py-3 px-4 rounded-full border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Buy Now</button>
        </div>
        {/* Image */}
        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="Woman" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />
      {/* Products */}
      <h1 className="mt-12 text-2xl font-sans font-semibold">Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
