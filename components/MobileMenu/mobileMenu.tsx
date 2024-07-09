"use client";

import { MobileNavbarData } from "@/DummyData/Data";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  return (
    <div>
      {showMenuIcon ? (
        <IoMenuOutline
          size={30}
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(true), setShowMenuIcon(false);
          }}
        />
      ) : (
        <IoCloseSharp
          size={30}
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(false), setShowMenuIcon(true);
          }}
        />
      )}

      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20  w-full h-[calc(100vh-80px)]  flex flex-col justify-center items-center gap-4 text-xl z-10">
          {MobileNavbarData.map(({ url, id, title }) => (
            <Link
              href={url}
              key={id}
              onClick={() => {
                setIsOpen(false), setShowMenuIcon(true);
              }}
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
