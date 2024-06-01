import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-teal-600 h-20 relative px-4 md:px-8 lg:px-16 xl:px-32">
      {/* Mobile */}
      <div className="bg-rose-500 md:hidden h-full flex justify-between items-center">
        <Link href="/">
          <Image src="/tukuo.svg" alt="logo" width={90} height={90} />
        </Link>
        <Menu />
      </div>

      {/* Bigger */}
      <div className="bg-violet-500 hidden md:flex h-full items-center">
        {/* Left */}
        <div className="bg-amber-500 w-1/3">
          <Link href="/">
            <Image src="/tukuo.svg" alt="logo" width={90} height={90} />
          </Link>
        </div>
        {/* Right */}
        <div className="bg-rose-500 w-2/3">Andry</div>
      </div>
    </div>
  );
};

export default Navbar;
