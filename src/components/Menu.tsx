"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

const Menu = ({ tablet }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {open ? <RiCloseFill size={28} className="cursor-pointer text-n-1" onClick={() => setOpen(!open)} /> : <RiMenu5Fill size={28} className="cursor-pointer text-n-1" onClick={() => setOpen(!open)} />}

      {open && (
        <div className={`bg-n-8 backdrop-blur-md absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8 font-code text-2xl text-n-1`}>
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
          {!tablet && (
            <>
              <Link href="/" className="hover:text-logo duration-300">
                Logout
              </Link>
              <Link href="/" className="hover:text-logo duration-300">
                Cart(1)
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
