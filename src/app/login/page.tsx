"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);

  const [inputUser, setInputUser] = useState({
    username: "",
    email: "",
    password: "",
    emailCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle = mode === MODE.LOGIN ? "Log in" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Your Password" : "Verify Your Email";

  const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset" : "Verify";

  const wixClient = useWixClient();

  return (
    <div className="bg-tal-500 h-screen px-4 pt-[4.75rem] md:pt-[6rem] md:px-8 lg:px-32 xl:px-40 2xl:px-64 flex flex-col md:flex-row items-center justify-center">
      {/* Image Container */}
      {mode === MODE.LOGIN && (
        <div className="bg-ros-500 relative w-full h-full">
          <Image src="/login.svg" alt="Login" fill className="object-contain lg:object-cover" />
        </div>
      )}

      {/* Form Container */}
      <div className="bg-violt-500 w-full flex justify-center">
        <form className="flex flex-col gap-5 max-w-[300px] text-n-3">
          <h1 className="text-2xl font-semibold">{formTitle}</h1>
          {mode === MODE.REGISTER ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Username</label>
              <input type="text" name="username" placeholder="Username" className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm" />
            </div>
          ) : null}

          {mode !== MODE.EMAIL_VERIFICATION ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">E-mail</label>
              <input type="email" placeholder="****@gmail.com" className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm" />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Verification Code</label>
              <input type="text" name="emailCode" placeholder="Code" className="rounded-md p-4" />
            </div>
          )}

          {mode === MODE.REGISTER || mode === MODE.LOGIN ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Password</label>
              <input type="password" name="password" placeholder="Enter your password" className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm" />
            </div>
          ) : null}

          {mode === MODE.LOGIN && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.RESET_PASSWORD)}>
              Forgot Password?
            </div>
          )}

          <button className="py-3 rounded-md bg-logo text-n-2" disabled={isLoading}>
            {isLoading ? "Loading..." : buttonTitle}
          </button>

          {error && <div className="text-rose-500">{error}</div>}

          {mode === MODE.LOGIN && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.REGISTER)}>
              {"Don't"} have an account?
            </div>
          )}

          {mode === MODE.REGISTER && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.LOGIN)}>
              Have an account?
            </div>
          )}

          {mode === MODE.RESET_PASSWORD && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.LOGIN)}>
              Go back to Login
            </div>
          )}

          {message && <div className="text-sm text-green-500">{message}</div>}
        </form>
      </div>

      {/* Image Container */}
      {mode === MODE.REGISTER && (
        <div className="bg-ros-500 relative w-full h-full">
          <Image src="/register.svg" alt="Register" fill className="object-contain lg:object-cover" />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
