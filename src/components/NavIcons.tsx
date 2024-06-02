"use client";

import { PiUserCircleFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="bg-teal-500 relative flex items-center gap-4 xl:gap-6 text-n-4">
      <PiUserCircleFill size={24} onClick={handleProfile} />
      {isProfileOpen && (
        <div className="bg-amber-500 absolute z-20 top-10 left-0 p-4 rounded-md text-sm">
          <Link href="/">Profile</Link>
          <p className="mt-2 cursor-pointer">Logout</p>
        </div>
      )}

      <IoMdNotificationsOutline size={24} />
      <BsCart3 size={24} />
    </div>
  );
};

export default NavIcons;
