import React from "react";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav className="flex py-[.25rem] items-center justify-between w-full">
      <div>
        <Logo />
      </div>
      <div className="flex text-white-100">
        <p className="py-[1.2rem] px-[3rem] flex items-center !text-green-100 justify-center">
          Sample Page
        </p>
        <p className="py-[1.2rem] px-[3rem] flex items-center justify-center">
          Styleguide
        </p>
        <p className="py-[1.2rem] px-[3rem] flex items-center justify-center">
          Tutorial
        </p>
      </div>
    </nav>
  );
}
