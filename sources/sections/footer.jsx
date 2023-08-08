import Image from "next/image";
import React from "react";
import { footer } from "../assets/images";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#42454A]" id="footer">
        <div className="absolute top-0 w-full h-[30%] bg-[#eaeaea]" />

        <div className="flex md:items-center md:flex-row flex-col gap-3">
          <Image
            draggable={false}
            src={footer}
            alt=""
            className="z-50 relative"
            width={400}
          />

          <div className="md:pt-[130px] text-white flex flex-col text-center w-full gap-5 p-2">
            <div>
              <div className="sm:text-4xl text-3xl font-bold">
                Subscribe To Newsletter
              </div>
              <div className="sm:text-sm text-[13px]">
                Subscribe to our newsletter to get amazing offers in future.
              </div>
            </div>

            <div className="border-2 mx-auto w-full max-w-[400px] rounded-md px-3 py-2 flex items-center">
              <input
                type="email"
                className="bg-transparent outline-none w-full pr-2"
                placeholder="Enter your E-mail"
              />

              <button className="p-2 px-4 rounded-lg bg-black hover:bg-[#0000008a] duration-300">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="text-white py-5 text-sm text-center">
          © Copyright 2021. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
