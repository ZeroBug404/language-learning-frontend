// The Hydration error is coming here because of using
// {role ? (
//   <li className="m-4">
//     <Dropdown menu={{ items }}>
//       <Space wrap size={16}>
//         <Avatar size="large" icon={<UserOutlined />} />
//       </Space>
//     </Dropdown>
//   </li>
// ) : (
//   <li className="m-4">
//     <Button onClick={login} type="primary" danger>
//       Login
//     </Button>
//   </li>
// )}

"use client";

import { useEffect, useState } from "react";
// import Button from './Button';
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import {
  AlignRightOutlined,
  CloseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../assets/logo.png";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "#service" },
    // { name: "ABOUT", link: "#about" },
    { name: "BLOG'S", link: "#blog" },
    // { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Fetch user role on mount
    const { role } = getUserInfo() as any;
    setRole(role);
  }, []);

  const logOut = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link href={`/${role}`}>
          <Button
            type="text"
            danger
            style={{
              fontSize: "1.2rem",
            }}
          >
            Dashboard
          </Button>
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Button
          onClick={logOut}
          type="text"
          // size="large"
          danger
          style={{
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          LogOut
        </Button>
      ),
    },
  ];

  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  const [selectedLink, setSelectedLink] = useState("/");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div className="w-full fixed top-0 z-30">
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
          className={`md:flex md:gap-1 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="font-semibold md:my-0 my-4">
              <Link
                href={link.link}
                className={`text-white hover:bg-[#f5b417] duration-500 px-5 py-3 ${
                  selectedLink === link.link ||
                  (selectedLink === "/" && link.link === "/home")
                    ? "bg-[#f5b417]"
                    : ""
                }`}
                onClick={() => handleLinkClick(link.link)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Why this commented code giving the error? */}
          {role ? (
            <li className="m-4">
              <Dropdown menu={{ items }}>
                <Space wrap size={16}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Space>
              </Dropdown>
            </li>
          ) : (
            <li
              className="m-4"
              style={{
                textAlign: "center",
              }}
            >
              <Button
                onClick={login}
                type="primary"
                size="large"
                danger
                style={{
                  fontSize: "1.1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
