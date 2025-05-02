"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import NavbarHome from "@/components/navbarhome";

export default function Page() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <NavbarHome />
      <audio autoPlay loop hidden>
        <source src="/audios/bg.MP3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div
        className=" bg-cover bg-no-repeat bg-center z-0"
        style={{ backgroundImage: "url('/images/br.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center min-h-screen text-sm p-3">
          <div className=" text-center pb-9">
            <h1 className="font-extrabold text-white text-[45px] pb-4">
              Welcome to ticketing.com
            </h1>
            <p className=" text-white text-xl font-semibold underline tracking-wide">
              The safest and most trusted travel event ticket sales site
            </p>
          </div>
          <div className="flex flex-col max-[440px] p-5 rounded-xl bg-black bg-opacity-70">
            <h1 className=" text-3xl font-semibold text-white">
              Enter your account
            </h1>
            <p className="text-[#989898] text-[13px]">
              To be able to book tickets and make payments you must first login
            </p>

            <div className=" font-bold mt-5 text-white">Email</div>
            <input
              type="email"
              placeholder="ticketing@mail.com"
              className="p-3 bg-[#F3F4F6] rounded-lg"
            />

            <div className=" font-bold mt-5 text-white">Password</div>
            <div className="p-3 flex bg-[#F3F4F6] rounded-lg w-full">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                className="w-full  bg-[#F3F4F6] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="ml-2"
              >
                {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="mt-4 text-xs text-white">
              Dont have an account?{" "}
              <Link href="/auth/register" className=" text-[#FF0000] font-bold">
                Register
              </Link>
            </div>
            <button
              className="rounded-lg mt-2 text-white bg-[#FF0000] h-16 font-semibold text-lg hover:underline hover:bg-[#690003]"
              // onClick={login}
            >
              Sign in
            </button>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-black-800 transition">
                <FaGoogle className="text-xl" />
                <span className="text-sm font-medium">Login with Google</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0d2dfd] text-white rounded-lg shadow hover:bg-[#1877F2] transition">
                <FaFacebookF className="text-xl" />
                <span className="text-sm font-medium">Login with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
