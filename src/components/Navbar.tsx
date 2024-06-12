import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed top-0 left-0 z-50 px-4 md:px-8 lg:px-16 xl:px-32 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      {/* Mobile */}
      <div className="md:hidden h-full flex justify-between items-center">
        <Link href="/">
          <Image src="/tukuo.svg" alt="logo" width={90} height={90} />
        </Link>
        <Menu />
      </div>

      {/* Bigger Screen */}
      <div className="hidden md:flex h-full items-center">
        {/* Left */}
        <div className="w-1/3 lg:w-1/2 flex items-center gap-8 2xl:gap-12">
          {/* Logo */}
          <Link href="/">
            <Image src="/tukuo.svg" alt="logo" width={90} height={90} className="hover:scale-105 duration-300" />
          </Link>
          {/* Nav-Link */}
          <nav className="hidden lg:flex gap-7 2xl:gap-10 font-code text-n-1 text-md">
            <Link href="/" className="hover:text-logo duration-300">
              Home
            </Link>
            <Link href="/" className="hover:text-logo duration-300">
              Shop
            </Link>
            <Link href="/" className="hover:text-logo duration-300">
              Deals
            </Link>
            <Link href="/" className="hover:text-logo duration-300">
              About
            </Link>
            <Link href="/" className="hover:text-logo duration-300">
              Contact
            </Link>
          </nav>
        </div>
        {/* Right */}
        <div className="w-2/3 lg:w-1/2 flex items-center justify-between lg:gap-5 2xl:gap-8">
          <SearchBar />
          <NavIcons />
          <Menu tablet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
