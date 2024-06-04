import Image from "next/image";

const ListPage = () => {
  return (
    <div className="bg-rose-500 px-4 pt-[4.75rem] lg:pt-[5rem] md:px-8 lg:px-16 xl:px-32">
      {/* Campain */}
      <div className="bg-teal-500 flex justify-between h-64 p-4">
        {/* Text */}
        <div className="bg-amber-500 w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-sans font-semibold text-n-3">
            {" "}
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="bg-black text-n-1 uppercase text-sm py-3 px-4 rounded-full border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Buy Now</button>
        </div>
        {/* Image */}
        <div className="bg-green-700 w-1/3 relative">
          <Image src="/woman.png" alt="Woman" fill className="object-contain" />
        </div>
      </div>
      <div className="bg-violet-500">Andry</div>
    </div>
  );
};

export default ListPage;
