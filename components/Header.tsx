import React from "react";
import logo from "../public/vercel.svg";
import Image from "next/image";
import { CommandDemo } from "./Command";
import { DropdownMenuDemo } from "./DropDownMenu";
import { AvatarDemo } from "./Avatar";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <Image className="h-8 w-8" src={logo} alt="Logo" /> */}
              <h1 className="font-bold text-2xl">
                <a href="/">ScholarNet</a>
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
            <div className="hidden md:block">
              <div className="ml-10 flex  space-x-4 items-center">
                {
                  <Button asChild>
                    <Link href="/addCourse">
                      <span className="pr-2">
                        <Plus size={18} />
                      </span>
                      create Course
                    </Link>
                  </Button>
                }
                {
                  <Button asChild>
                    <Link href="/registerCourse">
                      <span className="pr-2">
                        <Plus size={18} />
                      </span>
                      Add Course
                    </Link>
                  </Button>
                }
                {/* <a href="#" className="">
                  <AvatarDemo />
                </a> */}
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
