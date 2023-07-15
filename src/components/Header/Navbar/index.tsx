"use client";

import { useState, useEffect } from "react";
import NavLinks from "../Navlink";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [navbar, setNavbar] = useState(false);

  const [isFixedVisible, setIsFixedVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFixedVisible(!isFixedVisible);
  };

  console.log("USER IS", user);
  useEffect(() => {
    console.log("USER IS-----", user);
  }, [dispatch, user]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window != "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <>
      <nav
        className={`${
          navbar
            ? "md:bg-gray-200 md:fixed md:transition md:duration-300  top-0 left-0 right-0 md:ease-out md:shadow-lg "
            : "md:bg-gray-600 md:absolute md:top-[40px] border-gray-700 "
        } fixed top-0  md:border-b-[1px] bg-golden md:bg-none z-30 w-full `}
      >
        <div
          className={`${
            navbar ? " md:my-0" : "md:my-4  "
          } flex items-center md:max-w-6xl mx-auto  p-4  pb-4 md:py-0  `}
        >
          <Link
            className={`${
              navbar ? "md:text-black " : "md:text-white"
            } font-semibold text-2xl text-white`}
            to="/"
          >
            MSP Books
          </Link>
          {/* Part-1 */}
          <div
            className={
              " md:static md:bg-transparent fixed bottom-0   left-0 right-0    md:border-0 border-t-[1px]   shadow-inner md:shadow-none  bg-gray-100 md:bg-none md:ml-auto m-0 px-4 py-2 md:py-0 "
            }
          >
            <ul className="flex items-center flex-row transition-all duration-200 ease-in justify-between">
              <NavLinks value={navbar} />
            </ul>
          </div>

          {/*  */}
          <Searchbar value={isFixedVisible} />

          {/* Part */}
          <div className="ml-auto flex gap-3 items-center">
            <div className="">
              <button
                type="button"
                className="md:text-golden text-white font-bold  p-1 rounded shadow relative text-sm"
              >
                <span className="absolute -top-2 left-6 bg-red-500 text-white rounded w-5 h-5 text-sm font-semibold rounded-full">
                  45
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
            </div>

            <div className=" text-white px-4 py-2 text-lg flex items-center gap-2 justify-center">
              <button onClick={handleButtonClick}>
                <i className="bx bx-search"></i>
              </button>
              <button type="button" className="">
                <i className="bx bxs-user-circle"></i>
              </button>
              <small>ss</small>
              {/* dropdown menus */}
              <div className="hidden group-hover:block absolute w-full transition">
                <ul className="bg-white shadow-lg w-full p-2 flex flex-col gap-1">
                  <li className="text-gray-700 font-semibold hover:text-golden transition">
                    <Link className="block" to={"/profile"}>
                      Profile
                    </Link>
                  </li>
                  <li className="text-gray-700 font-semibold hover:text-golden transition">
                    <button className="block w-full text-left" type="button">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* <button
              type='button'
              className='bg-golden text-white px-4 py-2 text-lg'
              >
              Login
            </button> */}
          </div>
        </div>
      </nav>
      {isFixedVisible && (
        <div className="mb-10 transition-opacity duration-200 ease-in-out"></div>
      )}
    </>
  );
}
