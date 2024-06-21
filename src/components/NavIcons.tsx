"use client";

import { PiUserCircleFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import Loader from "./Loader";
import { useCartStore } from "@/hooks/useCartStore";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";

const NavIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const wixClient = useWixClient();

  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      Cookies.remove("refreshToken");
      const { logoutUrl } = await wixClient.auth.logout(window.location.href);
      router.push(logoutUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsProfileOpen(false);
    }
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // AUTH WITH WIX-MANAGE LOGIN
  // const wixClient = useWixClient();

  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData("http://localhost:3000");

  //   localStorage.setItem("OAuthWix", JSON.stringify(loginRequestData));

  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);

  //   window.location.href = authUrl;
  // };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6 text-n-4 cursor-pointer">
      <PiUserCircleFill size={25} onClick={handleProfile} className="hover:text-logo transition-colors duration-500 ease-in-out" />
      {isProfileOpen && (
        <div className="bg-n-7 backdrop-blur-md absolute top-10 left-0 p-4 rounded-md text-sm border border-n-1/10">
          <Link href="/profile" className="flex items-center gap-3 mb-3 text-n-3 hover:text-logo transition-all duration-300">
            <span className="text-md">Profile</span>
            <RiUserLine size={20} />
          </Link>
          <p className="mt-2" onClick={handleLogout}>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="flex items-center gap-2 text-n-3 hover:text-logo transition-all duration-300">
                <span className="text-md">Logout</span>
                <AiOutlineLogout size={20} />
              </div>
            )}
          </p>
        </div>
      )}

      <IoMdNotificationsOutline size={25} className="hover:text-logo transition-colors duration-500 ease-in-out" />

      <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
        <BsCart3 size={25} className="hover:text-logo transition-colors duration-500 ease-in-out" />
        <div className="bg-rose-500 absolute -top-3 -right-4 w-6 h-6 flex items-center justify-center rounded-full text-n-1 text-sm">{counter}</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
