import Filter from "@/components/Filter";
import Loading from "@/components/Loading";
import ProductList from "@/components/ProductList";
import { BackgroundBeams } from "@/components/ui/Background-beams";
import { wixClientServer } from "@/libs/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const data = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");

  console.log(searchParams, "<----dilistpage");

  return (
    <div className="px-4 pt-[4.75rem] md:pt-[6rem] md:px-8 lg:px-16 xl:px-32">
      {/* Campain */}
      <div className="bg-n-7 backdrop-blur-md hidden sm:flex justify-between h-72 p-4 rounded-md border border-n-1/10">
        {/* Text */}
        <div className="w-2/3 flex flex-col items-center justify-center gap-8 relative z-10">
          <h1 className="text-4xl font-sans font-semibold text-n-3 leading-snug">
            {" "}
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="bg-black text-n-3 uppercase text-[13px] py-3 px-5 rounded-full border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Buy Now</button>
        </div>

        {/* Image */}
        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="Woman" fill className="object-contain" />
        </div>
        <BackgroundBeams />
      </div>
      {/* Filter */}
      <Filter />
      {/* Products */}
      <h1 className="mt-12 text-2xl font-sans font-semibold">{data.collection?.name} For You!</h1>
      <Suspense fallback={<Loading />}>
        <ProductList categoryId={data.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default ListPage;

// import type { Config } from "tailwindcss";
