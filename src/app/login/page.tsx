"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Image from "next/image";
import { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { GrGoogle } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";

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
  const [showPassword, setShowPassword] = useState(false);

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
          setMessage("Check your email to reset your password!");
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

        case LoginState.FAILURE:
          if (response.errorCode === "invalidEmail" || response.errorCode === "invalidPassword") {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong. Please try again!");
          }

        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);

        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
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

  // AUTH WITH WIX-MANAGE LOGIN

  const loginOauth = async () => {
    const loginRequestData = wixClient.auth.generateOAuthData("http://localhost:3000");

    localStorage.setItem("OAuthWix", JSON.stringify(loginRequestData));

    const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);

    window.location.href = authUrl;
  };

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
              <div className="flex items-center rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
                <input
                  type="text"
                  name="username"
                  value={inputUser.username}
                  onChange={handleChangeInput}
                  placeholder="Username"
                  className="w-full p-4 rounded-s-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs"
                />
                <CiUser size={35} className="pe-3 text-n-4/60" />
              </div>
            </div>
          ) : null}

          {mode !== MODE.EMAIL_VERIFICATION ? (
            <div className="flex flex-col gap-2">
              <label className="text-sm">E-mail</label>
              <div className="flex items-center rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
                <input
                  type="email"
                  name="email"
                  value={inputUser.email}
                  onChange={handleChangeInput}
                  placeholder="****@gmail.com"
                  className="w-full p-4 rounded-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs autofill:bg-n-7"
                />
                <CiMail size={35} className="pe-3 text-n-4/60" />
              </div>
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
              <div className="flex items-center rounded-lg bg-n-7 gap-3 border border-n-1/10 hover:border-logo transition-all duration-300">
                <input
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  value={inputUser.password}
                  onChange={handleChangeInput}
                  placeholder="Enter your password"
                  className="w-full p-4 rounded-lg bg-n-7 outline-none  placeholder:text-sm placeholder:text-n-4/60 text-xs"
                />
                <div onClick={() => setShowPassword(!showPassword)}>{!showPassword ? <IoEyeOutline size={35} className="pe-3 text-n-4/60" /> : <IoEyeOffOutline size={35} className="pe-3 text-n-4/60" />}</div>
              </div>
            </div>
          ) : null}

          {mode === MODE.LOGIN && (
            <div className="text-sm cursor-pointer hover:text-logo transition-all duration-300" onClick={() => setMode(MODE.RESET_PASSWORD)}>
              Forgot Password?
            </div>
          )}

          <button className={`py-3 rounded-md bg-logo text-n-2 ${isLoading ? "bg-transparent border border-logo" : ""}`} disabled={isLoading}>
            {isLoading ? <Loader /> : buttonTitle}
          </button>

          {mode === MODE.LOGIN && (
            <div className="bg-ambr-600 flex flex-col gap-3 items-center text-xs">
              <span>Or Sign in with</span>
              <div className="flex gap-5" onClick={loginOauth}>
                <GrGoogle size={23} className="cursor-pointer hover:text-logo transition-all duration-300" />
                <FaFacebook size={23} className="cursor-pointer hover:text-logo transition-all duration-300r" />
              </div>
            </div>
          )}

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
