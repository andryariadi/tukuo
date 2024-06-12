"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Image from "next/image";
import { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const router = useRouter();

  const wixClient = useWixClient();

  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    router.push("/");
  }

  console.log(isLoggedIn, "<----diloginpage");

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

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, "<----diloginpage1");

    setInputUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email: inputUser.email,
            password: inputUser.password,
          });
          break;

        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email: inputUser.email,
            password: inputUser.password,
            profile: {
              nickname: inputUser.username,
            },
          });
          break;

        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(inputUser.email, window.location.href);
          break;

        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: inputUser.emailCode,
          });
          break;

        default:
          break;
      }

      console.log(response, "<----diloginpage2");

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Login successful! You are being redirected");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken);

          Cookie.set("refreshToken", JSON.stringify(tokens.refreshToken), { expires: 2 });

          wixClient.auth.setTokens(tokens);

          router.push("/");
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const formTitle = mode === MODE.LOGIN ? "Log in" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset Your Password" : "Verify Your Email";

  const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Reset" : "Verify";

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
        <form className="flex flex-col gap-5 max-w-[300px] text-n-3" onSubmit={handleSubmitLogin}>
          <h1 className="text-2xl font-semibold">{formTitle}</h1>
          {mode === MODE.REGISTER ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Username</label>
              <input
                type="text"
                name="username"
                value={inputUser.username}
                onChange={handleChangeInput}
                placeholder="Username"
                className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm placeholder:text-n-4/60"
              />
            </div>
          ) : null}

          {mode !== MODE.EMAIL_VERIFICATION ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">E-mail</label>
              <input
                type="email"
                name="email"
                value={inputUser.email}
                onChange={handleChangeInput}
                placeholder="****@gmail.com"
                className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm placeholder:text-n-4/60"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Verification Code</label>
              <input type="text" name="emailCode" value={inputUser.emailCode} onChange={handleChangeInput} placeholder="Code" className="rounded-md p-4" />
            </div>
          )}

          {mode === MODE.REGISTER || mode === MODE.LOGIN ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={inputUser.password}
                onChange={handleChangeInput}
                placeholder="Enter your password"
                className="p-4 border border-n-1/10 rounded-lg bg-n-7 outline-none focus:ring-logo focus:border-logo placeholder:text-sm placeholder:text-n-4/60"
              />
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
              {"Don't"} have an account? Sign Up
            </div>
          )}

          {mode === MODE.REGISTER && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.LOGIN)}>
              Have an account? Login
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
