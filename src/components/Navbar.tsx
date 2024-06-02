import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 relative px-4 md:px-8 lg:px-16 xl:px-32 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      {/* Mobile */}
      <div className="bg-rose-500 md:hidden h-full flex justify-between items-center">
        <Link href="/">
          <Image src="/tukuo.svg" alt="logo" width={90} height={90} />
        </Link>
        <Menu />
      </div>

      {/* Bigger */}
      <div className="hidden md:flex h-full items-center">
        {/* Left */}
        <div className="bg-amber-500 w-1/3">
          <Link href="/">
            <Image src="/tukuo.svg" alt="logo" width={90} height={90} />
          </Link>
        </div>
        {/* Right */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
