/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import NavLinks from "../Navlink";

import { Link, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { userLoggedOut } from "../../../redux/features/auth/authSlice";
import { lStorgeFutureBooks } from "../../../redux/features/futureBooks/futureBooksSlice";
import { lStorgeWishList } from "../../../redux/features/wishList/wishListSlice";

export default function Navbar() {
  const dispath = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { total } = useAppSelector((state) => state.wishList);
  const { total: futureTotal } = useAppSelector((state) => state.futureBooks);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    dispath(userLoggedOut());
    dispath(lStorgeFutureBooks({ books: [], total: 0 }));
    dispath(lStorgeWishList({ books: [], total: 0 }));
    localStorage.removeItem("auth");
    localStorage.removeItem("wishList");
    localStorage.removeItem("futueBooks");
  };

  const changeBackground = () => {
    if (window.scrollY >= 5) {
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
            ? "md:bg-indigo-500 md:fixed md:transition md:duration-300  top-0 left-0 right-0 md:ease-out md:shadow-lg "
            : "md:bg-gray-600 md:absolute md:top-[40px] border-gray-700 "
        } fixed top-0  md:border-b-[1px] bg-golden md:bg-none z-30 w-full `}
      >
        <div
          className={`${
            navbar ? " md:my-0" : "md:my-4  "
          } flex items-center md:max-w-6xl mx-auto  p-4 py-2  md:py-0   `}
        >
          <div className="shrink-0">
            <Link
              className={`${
                navbar ? "  md:text-golden " : "md:text-white"
              } font-semibold text-2xl text-white`}
              to="/"
            >
              MSP Books
            </Link>
          </div>
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

          {(location.pathname == "/" || location.pathname == "/allbooks") && (
            <Searchbar />
          )}

          {/* Part */}
          <div className="ml-auto flex gap-3 items-center space-x-1 ">
            <Link to="/wishList">
              <button
                type="button"
                className="md:text-golden text-white font-bold p-1 rounded shadow relative text-sm"
              >
                <span className="absolute -top-2 left-6 bg-red-500 text-white w-5 h-5 text-sm font-semibold rounded-full">
                  {total}
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
                    d="M12 21.5l-1.94-1.759C4.75 14.307 2 11.292 2 7.5 2 4.186 4.186 2 7.5 2c1.76 0 3.363.844 4.5 2.149C13.137 2.844 14.74 2 16.5 2 19.814 2 22 4.186 22 7.5c0 3.792-2.75 6.807-8.06 12.242L12 21.5z"
                  />
                </svg>
              </button>
            </Link>

            {/* ICON FOR READ BOOOK */}

            <Link to="/futureBooks">
              <button
                type="button"
                className="md:text-golden text-white font-bold p-1 rounded shadow relative text-sm "
              >
                <span className="absolute -top-2 left-6 bg-red-500 text-white w-5 h-5 text-sm font-semibold rounded-full ">
                  {futureTotal}
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
                    d="M5 4.5A1.5 1.5 0 013.5 6v13.5c0 .828.672 1.5 1.5 1.5h13.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H5zm0 0c0-.414.336-.75.75-.75h12.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H5.75a.75.75 0 01-.75-.75V4.5zM9 2.25h6M12 2.25v4"
                  />
                </svg>
              </button>
            </Link>
            <div className=" text-white  py-2 text-lg flex items-center gap-2 justify-center">
              {/* <button type="button" className="">
                <i className="bx bxs-user-circle"></i>
              </button> */}

              <small
                className={`${navbar ? "  md:text-black " : "md:text-white"}`}
              >
                {user?.name.lastName}
              </small>

              {user?.email && (
                <button
                  className={` ${
                    navbar ? "  md:text-black " : "md:text-white"
                  }hover:text-white border border-golden hover:bg-golden focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-1.5 py-1.5 text-center   shadow  `}
                  onClick={handleLogout}
                >
                  <Link to="/login"> Logout</Link>

                  {/* <i class="bx bxs-log-in-circle"></i> */}
                </button>
              )}
              {!user?.email && (
                <button
                  className={` ${
                    navbar ? "  md:text-black " : "md:text-white"
                  }hover:text-white border border-golden hover:bg-golden focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-1.5 py-1.5 text-center   shadow  `}
                >
                  <Link to="/login"> Login</Link>

                  {/* <i class="bx bxs-log-in-circle"></i> */}
                </button>
              )}

              {/* dropdown menus */}
              {/* <div className="hidden group-hover:block absolute w-full transition">
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
              </div> */}
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
    </>
  );
}
