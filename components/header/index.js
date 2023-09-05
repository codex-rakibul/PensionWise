import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUser, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addAuthUserId } from "@/app/feature/allUsers/alluserSlice";
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
  {
    id: "logout",
    title: "Logout",
    icon: faRightToBracket, // Assuming you have an appropriate icon
  },
];

export default function HeaderComponent() {
  const [localStorage_userData, setLocalStorage_userData] = useState();
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  // Check For Login
  const loginData = useSelector((state) => state.allUserReducer);

  // Get User Value in LocalStorage
  useEffect(() => {
    const userAuth_LocalStorageData = JSON.parse(localStorage.getItem("user_id"));
    console.log("Navbar---------",userAuth_LocalStorageData);
    setLocalStorage_userData(userAuth_LocalStorageData);
  }, [loginData]);
  
  

  // Toggle Button
  const handleAcount = () => {
    setToggle(!toggle);
  };
  const handleLogout = () =>{
    localStorage.setItem("user_id", JSON.stringify(""));
    dispatch(addAuthUserId("Null"));
    router.push("/");
  }

  const renderData = (
    <div className="">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-600 py-4 text-white z-10">
        <div className="flex justify-between sm:mx-28 mx-4 ">
          <Link href={"/"} className={`flex justify-center items-center  logo`}>
            PensionWise
          </Link>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <div onClick={() => handleAcount()}>
                <UserOutlined className="text-2xl flex justify-center items-center" />
              </div>
              {toggle && (
                <div className=" flex flex-1 justify-end items-center">
                  <div
                    className={`pt-4 px-6 pb-8 bg-gray-500  w-52 absolute top-16 right-0 mx-2 my-2  rounded sidebar`}
                  >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                      {navLinks.map((nav) => {
                        const { id, title, icon } = nav;

                        // Conditionally render links based on localStorage_userData
                        if (
                          ((localStorage_userData?.length > 0) &&
                            (id === "dashboard" || id === "about" || id === "logout")) ||
                          ((localStorage_userData?.length <= 0 || localStorage_userData === null || localStorage_userData === undefined) && ( id === "about" || id === "signin"))
                        ) {
                          return (
                            <div
                              key={id}
                              className="border-b border-gray-400 w-[100%] flex justify-center items-center"
                            >
                             {
                              id !== "logout" ? (
                                <Link onClick={() => setToggle(false)} href={`/${id}`}>
                                <li
                                  className={` cursor-pointer text-[16px] flex justify-center items-center py-4 text-white`}
                                >
                                  <div className=" grid grid-cols-2 mr-[22px]">
                                    <div className="mr-2 flex justify-end items-center">
                                      <FontAwesomeIcon icon={icon} />
                                    </div>
                                    <div>{title}</div>
                                  </div>
                                </li>
                              </Link> 
                              ):(
                                <li onClick={handleLogout}
                                  className={` cursor-pointer text-[16px] flex justify-center items-center py-4 text-white`}
                                >
                                  <div className=" grid grid-cols-2 mr-[22px]">
                                    <div className="mr-2 flex justify-end items-center">
                                      <FontAwesomeIcon icon={icon} />
                                    </div>
                                    <div>{title}</div>
                                  </div>
                                </li>
                              )
                              
                             }
                              <div />
                            </div>
                          );
                        }
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
