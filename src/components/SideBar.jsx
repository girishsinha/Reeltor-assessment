import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../slices/Mode";

import { useEffect, useState, useRef } from "react";

const SideBar = ({ openNav, setOpenNav }) => {
  const [darkMode, setDarkMode] = useState(false);
  const navRef = useRef(null);
  const nanLinksRef = useRef(null);

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);
  // console.log(mode);

  useEffect(() => {
    const nav = navRef.current;
    const navLinks = nanLinksRef.current;

    // this function is for handale sidenavbar behaviour in the mobile screen
    // close the nav bar when click out side the nav
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        openNav ? "-left-30" : "left-0"
      } w-24 top-18 transition-discrete sm:flex z-11 fixed sm:static flex-col h-screen py-8  border-r-3    ${
        mode ? "bg-white border-[#F5F3FB]" : "bg-[#1C1A24] border-[#282632]"
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center justify-center h-12 group">
        <img src="logo.svg" alt="logo" className="h-9 w-9" />
      </NavLink>

      {/* Navigation NavLinks */}
      <nav ref={navRef} className="flex-1 py-6 ">
        <ul ref={nanLinksRef} className=" flex flex-col gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "border-l-4" : ""
                }`
              }
            >
              <img
                src="/dashboard.svg"
                alt="dashbord"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "border-l-4" : ""
                }`
              }
            >
              <img
                src="/home.svg"
                alt="home"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "#" : ""
                }`
              }
            >
              <img
                src="analytics.svg"
                alt="analytics"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "" : ""
                }`
              }
            >
              <img
                src="store.svg"
                alt="store"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "" : ""
                }`
              }
            >
              <img
                src="calender.svg"
                alt="calender"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
                  isActive ? "" : ""
                }`
              }
            >
              <img
                src="setting.svg"
                alt="setting"
                className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
              />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="flex justify-center items-center">
        <button
          className="h-10 w-10 rounded-lg p-2 cursor-pointer"
          onClick={() => dispatch(toggleMode())}
        >
          {mode ? (
            <svg
              className="fill-[#7942FB] block "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg
              className="fill-yellow-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <NavLink
        to="#"
        className={({ isActive }) =>
          `flex items-center justify-center h-12 group border-[#ED5B75] w-full ${
            isActive ? "" : ""
          }`
        }
      >
        <img
          src="powerbutton.svg"
          alt="setting"
          className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-100 ease-in-out"
        />
      </NavLink>
    </div>
  );
};
export default SideBar;
