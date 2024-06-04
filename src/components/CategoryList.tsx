import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="carousel mt-12 px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8 mb-2">
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo">
          <div className="bg-sky-600 relative w-full h-96">
            <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Category" fill sizes="20vw" className="object-cover" />
          </div>
          <h1 className="mt-5 font-sans font-light text-clip tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
