"use client";

import { PiUserCircleFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6 text-n-4 cursor-pointer">
      <PiUserCircleFill size={25} onClick={handleProfile} />
      {isProfileOpen && (
        <div className="bg-n-7 backdrop-blur-md absolute top-10 left-0 p-4 rounded-md text-sm border border-n-1/10 transition-colors duration-500 ease-in-out hover:border-logo text-n-1">
          <Link href="/">Profile</Link>
          <p className="mt-2">Logout</p>
        </div>
      )}

      <IoMdNotificationsOutline size={25} />

      <div className="relative">
        <BsCart3 size={25} onClick={() => setIsCartOpen(!isCartOpen)} />
        <div className="bg-rose-500 absolute -top-3 -right-4 w-6 h-6 flex items-center justify-center rounded-full text-n-1 text-sm">1</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
