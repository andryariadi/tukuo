import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex justify-between flex-wrap gap-x-1 gap-y-5 md:gap-y-12 mt-12">
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[24%] p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {/* Top */}
        <div className="relative w-full h-[19rem] rounded-t-md">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-t-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-t-md" />
        </div>
        {/* Bottom */}
        <div className="bg-tel-500 h-[10rem] flex flex-col items-start justify-between p-1">
          <div className="w-full flex justify-between font-sans">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <p className="text-sm text-n-3">My Description</p>
          <button className="w-max bg-black py-3 px-4 rounded-md text-n-3 border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Checkout</button>
        </div>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[24%] p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {/* Top */}
        <div className="relative w-full h-[19rem] rounded-t-md">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-t-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-t-md" />
        </div>
        {/* Bottom */}
        <div className="bg-tel-500 h-[10rem] flex flex-col items-start justify-between p-1">
          <div className="w-full flex justify-between font-sans">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <p className="text-sm text-n-3">My Description</p>
          <button className="w-max bg-black py-3 px-4 rounded-md text-n-3 border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Checkout</button>
        </div>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[24%] p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {/* Top */}
        <div className="relative w-full h-[19rem] rounded-t-md">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-t-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-t-md" />
        </div>
        {/* Bottom */}
        <div className="bg-tel-500 h-[10rem] flex flex-col items-start justify-between p-1">
          <div className="w-full flex justify-between font-sans">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <p className="text-sm text-n-3">My Description</p>
          <button className="w-max bg-black py-3 px-4 rounded-md text-n-3 border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Checkout</button>
        </div>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[24%] p-1 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        {/* Top */}
        <div className="relative w-full h-[19rem] rounded-t-md">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-t-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-t-md" />
        </div>
        {/* Bottom */}
        <div className="bg-tel-500 h-[10rem] flex flex-col items-start justify-between p-1">
          <div className="w-full flex justify-between font-sans">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <p className="text-sm text-n-3">My Description</p>
          <button className="w-max bg-black py-3 px-4 rounded-md text-n-3 border border-n-4 transition-colors duration-500 ease-in-out hover:border-logo hover:text-logo">Checkout</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
