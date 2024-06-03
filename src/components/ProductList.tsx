import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="bg-rose-600 flex justify-between flex-wrap gap-x-8 gap-y-16 mt-12">
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%] p-3 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="bg-teal-600 relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between font-sans">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-n-3">My Description</p>
        <button className="w-max bg-n-7 py-3 px-4 rounded-md border border-n-1/10 text-n-1">Checkout</button>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%] p-3 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="bg-teal-600 relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between font-sans">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-n-3">My Description</p>
        <button className="w-max bg-n-7 py-3 px-4 rounded-md border border-n-1/10 text-n-1">Checkout</button>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%] p-3 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="bg-teal-600 relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between font-sans">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-n-3">My Description</p>
        <button className="w-max bg-n-7 py-3 px-4 rounded-md border border-n-1/10 text-n-1">Checkout</button>
      </Link>
      <Link href="/" className="bg-n-8 backdrop-blur-md w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%] p-3 rounded-md border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
        <div className="bg-teal-600 relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product List"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-300"
          />

          <Image src="https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product List" fill sizes="25vw" className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between font-sans">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <p className="text-sm text-n-3">My Description</p>
        <button className="w-max bg-n-7 py-3 px-4 rounded-md border border-n-1/10 text-n-1">Checkout</button>
      </Link>
    </div>
  );
};

export default ProductList;
