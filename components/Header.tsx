import React from "react";
import logo from "../public/vercel.svg";
import Image from "next/image";
import { CommandDemo } from "./Command";
import { DropdownMenuDemo } from "./DropDownMenu";
import { AvatarDemo } from "./Avatar";

const Header = () => {
  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <Image className="h-8 w-8" src={logo} alt="Logo" /> */}
              <h1 className="font-bold text-2xl">
                <a href="#">ScholarNet</a>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4 items-center">
                <a href="#" className="">
                  <DropdownMenuDemo />
                </a>
                <a
                  href="#"
                  className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <CommandDemo />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {" "}
            {/* BEGIN: Added flex container */}
            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4 items-center">
                <a href="#" className="">
                  <AvatarDemo />
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END: Added flex container */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
