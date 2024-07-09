import Link from "next/link";
import React from "react";
import MobileMenu from "../MobileMenu/mobileMenu";
import { MobileNavbarData } from "@/DummyData/Data";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

const PrimaryNavbar = () => {
  const isAdmin = true;
  return (
    <div className="relative h-20 ">
      {/* Mobile screen */}
      <div className="flex h-full  justify-between p-4 items-center  md:hidden">
        <div className="text-2xl">
          <Link href={"/"}>Space-Sort</Link>
        </div>

        <MobileMenu />
      </div>

      <div className="hidden h-full md:flex justify-between items-center p-8 bg-white-300 border-b-2 border-gray-300">
        <div className=" flex items-center gap-2">
          <h1 className="text-2xl">Space-Sport</h1>
          <h2>Aimy</h2>
        </div>
        <div className="flex gap-4">
          {MobileNavbarData.map(({ url, id, title }) => (
            <Link href={url} key={id}>
              {title}
            </Link>
          ))}
        </div>
        <div>
          {!isAdmin ? (
            <div className="flex gap-4">
              <Link href="/">Login</Link>
              <Link href="/">Sign Up</Link>
            </div>
          ) : (
            <div className="flex gap-4 md:gap-8">
              <IoLogoInstagram size={25} className="cursor-pointer" />
              <IoLogoPinterest size={25} className="cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
