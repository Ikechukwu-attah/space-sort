import Link from "next/link";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 border-t-2 md:p-8 border-gray-300 text-gray-500 w-full">
      <div className="flex flex-col items-center justify-center gap-4 pb-8">
        <Link href="/" className="underline text-sm md:text-base">
          INQUIRE HERE
        </Link>
        <Link
          href="mailto:gabriella@thehappysort.com"
          className="underline text-sm md:text-base"
        >
          gabriella@thehappysort.com
        </Link>

        <div className="flex gap-4 md:gap-8">
          <IoLogoInstagram size={25} className="cursor-pointer" />
          <IoLogoPinterest size={25} className="cursor-pointer" />
        </div>
        <h4 className="text-center text-sm md:text-base">
          @2023 The Happy Sort. All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
