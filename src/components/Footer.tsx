import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-n-7 backdrop-blur-md py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-20 mt-24 text-sm font-sans border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo">
      {/* Top */}
      <div className="bg-ambr-500 flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="bg-sy-500 w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image src="/tukuo.svg" alt="logo" width={60} height={60} />
          </Link>
          <p>3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States</p>
          <span className="font-semibold">hello@andryariadi.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>

        {/* Center */}
        <div className="bg-gry-500 w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-3">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-3">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-3">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gren-500 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email address" className="bg-n-7 p-4 w-3/4 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo" />
            <button className="w-1/4 bg-logo text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© {new Date().getFullYear()} AndryAriadi. All rights reserved.</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
