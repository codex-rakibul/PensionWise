import styles from "./style.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket,faUser,faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";

export const navLinks = [
  {
    id: "dashboard",
    title: "Profile",
    icon: faUser,
  },
  {
    id: "about",
    title: "About Us",
    icon: faCircleInfo,
  },
  {
    id: "signin",
    title: "Sign in",
    icon: faRightToBracket,
  },
  // {
  //   id: "logout",
  //   title: "Logout",
  //   icon: faRightFromBracket,
  // },
];

export default function HeaderComponent() {
  const [toggle, setToggle] = useState(false);
  const s = false;
  const router = useRouter();
  const onSearch = (value) => {};

  const handleAcount = () => {
    setToggle(!toggle);
  };
  const renderData = (
    <div className="">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-600 py-4  text-white z-10">
        <div className="flex justify-between  sm:mx-28 mx-4 ">
          <Link
            href={"/"}
            className={`flex justify-center items-center  logo`}
          >
            PensionWise
          </Link>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <div onClick={() => handleAcount()}>
                <UserOutlined className="text-2xl flex justify-center items-center" />
              </div>
              {/* <Image className="rounded-full" width={40} height={40} src={profileImage}  alt={"name"}/> */}
              {toggle && (
                <div className=" flex flex-1 justify-end items-center">
                  <div
                    className={`pt-4 px-6 pb-8 bg-gray-500  w-52 absolute top-16 right-0 mx-2 my-2  rounded sidebar`}
                  >
                    <ul className="list-none flex  flex-col justify-end items-center flex-1">
                      {navLinks.map((nav) => {
                        const { id, title, icon } = nav;
                        return (
                          <div
                            key={id}
                            className="border-b border-gray-400 w-[100%] flex justify-center items-center"
                          >
                            <Link onClick={()=>setToggle(false)} href={`/${id}`}>
                              <li
                                className={` cursor-pointer text-[16px] flex justify-center items-center py-4 text-white`}
                              >
                                <div className=" grid grid-cols-2 mr-[22px]">
                                <div className="mr-2 flex justify-end items-center"><FontAwesomeIcon icon={icon} /></div>
                                <div>{title}</div>
                                </div>
                              </li>
                            </Link>
                            <div />
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return renderData;
}