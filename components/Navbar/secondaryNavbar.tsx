"use client";

import { ROUTES, ROUTES_WITHOUT_SECONDARY_NAVBAR } from "@/app/routes";
import { usePathname } from "next/navigation";
import React, { use } from "react";

const getPageTitle = (path: string) => {
  // const singlePath = path.slice(1);
  // if (singlePath.includes("-")) {
  //   console.log("hello");
  //   return singlePath.replace("-", " ");
  // }
  // console.log(singlePath);
  // const route = ROUTES[singlePath];
  // console.log(route);
  // if (route === undefined) return;
  // console.log(route?.slice(1));
  // const resolvedRoute = route?.slice(1);

  // if (path !== ROUTES[resolvedRoute]) return;
  // return resolvedRoute;

  const pageName = Object.entries(ROUTES).find(([key, value]) => {
    if (value === path) {
      return key;
    }
  });

  console.log(pageName);
  if (pageName?.[0]) {
    return pageName?.[0].charAt(0).toUpperCase() + pageName?.[0].slice(1);
  }

  return null;
};

const SecondaryNavbar = () => {
  const path = usePathname();
  const title = getPageTitle(path);
  console.log(path);
  const showNavbar = !ROUTES_WITHOUT_SECONDARY_NAVBAR.includes(path);
  if (!(showNavbar && title)) return null;

  console.log(title);

  return (
    <div className="w-full bg-gray-200 flex items-center justify-center p-8">
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

export default SecondaryNavbar;
