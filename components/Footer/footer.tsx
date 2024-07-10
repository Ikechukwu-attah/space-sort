import Link from "next/link";
import { IoLogoPinterest, IoLogoInstagram } from "react-icons/io";
import React from "react";
import { MobileNavbarData } from "@/DummyData/Data";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-[#091334] border-t-2 border-gray-300 text-white w-full">
      <div className="flex flex-col md:flex-row p-4 md:p-8 justify-between gap-6">
        <div className="flex justify-center md:justify-start">Space Sort</div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          {MobileNavbarData.map(({ url, id, title }) => (
            <Link href={url} key={id} className="text-sm md:text-base">
              {title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 pb-8">
          <Link href="/" className="underline text-sm md:text-base">
            INQUIRE HERE
          </Link>
          <Link
            href="mailto:gabriella@thehappysort.com"
            className="underline text-sm md:text-base"
          >
            gabriella@thespacesort.com
          </Link>
          <div className="flex gap-4">
            <IoLogoInstagram size={25} className="cursor-pointer" />
            <IoLogoPinterest size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <h4 className="text-center text-[10px] md:text-[10px] border-t-2 border-gray-400 py-3">
        @2024 The Space Sort. All Rights Reserved.
      </h4>
    </footer>
  );
};

export default Footer;
