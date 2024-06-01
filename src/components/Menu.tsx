"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? <RiCloseFill size={28} className="cursor-pointer" onClick={() => setOpen(!open)} /> : <RiMenu5Fill size={28} className="cursor-pointer" onClick={() => setOpen(!open)} />}

      {open && (
        <div className={`bg-violet-500 absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8 font-code font-bold text-2xl`}>
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
