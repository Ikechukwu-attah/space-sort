import React from "react";

import SecondaryNavbar from "../Navbar/secondaryNavbar";
import PrimaryNavbar from "../Navbar/primaryNavbar";

const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <PrimaryNavbar />
      <SecondaryNavbar />
    </div>
  );
};

export default Header;
