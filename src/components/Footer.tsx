import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-n-7 backdrop-blur-md py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-20 mt-24 text-sm font-sans border border-n-1/10">
      {/* Top */}
      <div className="bg-ambr-500 flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="bg-sy-500 w-full md:w-1/4 flex flex-col gap-8 text-xs">
          <Link href="/">
            <Image src="/tukuo.svg" alt="logo" width={60} height={60} />
          </Link>
          <p>3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States</p>
          <span className="font-semibold">hello@andryariadi.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6 text-n-3 cursor-pointer">
            <FaInstagram size={16} className="hover:text-logo hover:scale-110 transition-all duration-300" />
            <RiFacebookFill size={16} className="hover:text-logo hover:scale-110 transition-all duration-300" />
            <FaXTwitter size={16} className="hover:text-logo hover:scale-110 transition-all duration-300" />
          </div>
        </div>

        {/* Center */}
        <div className="bg-gry-500 w-1/2 hidden lg:flex justify-between text-xs">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="hover:text-logo transition-all duration-300">
                About Us
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Careers
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Affiliates
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Blog
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="hover:text-logo transition-all duration-300">
                New Arrivals
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Accessories
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Men
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Women
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                All Products
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-3">
              <Link href="" className="hover:text-logo transition-all duration-300">
                Customer Service
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                My Account
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Find a Store
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Legal & Privacy
              </Link>
              <Link href="" className="hover:text-logo transition-all duration-300">
                Gift Card
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gren-500 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-xs">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email address" className="bg-n-7 p-4 w-3/4 border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo focus:outline-none" />
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-center">
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
