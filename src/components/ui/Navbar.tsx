"use client";

import { useState } from "react";
// import Button from './Button';
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from "../../app/assets/logo.png";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0">
      <div
        className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
        style={{ backgroundColor: "#41246D" }}
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <Image src={logo} width={200} height={100} alt="logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? <CloseOutlined /> : <AlignRightOutlined />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 font-semibold md:my-0 my-7 ">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>
            Get Started
          </Button> */}
        </ul>
      </div>
    </div>
  );
}
