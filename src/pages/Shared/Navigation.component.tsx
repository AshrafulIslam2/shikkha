import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import logo from "../../../src/images/logo/strade-logo-edited.jpeg";
import Modal from "./Modal.component";
import CartModal from "./CartModal.component";
import { BsTelephone } from "react-icons/bs";
const Navigation = () => {
  const { user, logOut } = useAuth();
  const [pcart, SetCart] = useState(false);
  const [notification, Setnotification] = useState(false);
  console.log(pcart);
  const cartandnotificationHandle = (
    cart: boolean | ((prevState: boolean) => boolean),
    notification: boolean | ((prevState: boolean) => boolean)
  ) => {
    SetCart(cart);
    Setnotification(notification);
  };
  return (
    <div
      className="sticky top-0 left-0 right-0 z-50"
      onBlur={() => cartandnotificationHandle(false, false)}
    >
      {/* Navigation Header start  */}
      <div className="hidden md:px-10 md:py-4 md:text-sm md:bg-black md:text-white md:flex md:justify-between md:items-center">
        <div className="flex ">
          <div className="flex items-center mr-4">
            <BsTelephone className="mr-1" />
            <span> +999-666-888-00</span>
          </div>
          <span>Tutorial</span>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <p>Be Partners</p>
          <div className="flex justify-center items-center">
            <p className="mr-1">Download</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div className="flex justify-center items-center">
            <form action="">
              <select name="ln" id="" className="bg-black border-0">
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation Body start  */}
      <div className="bg-white grid grid-cols-4 gap-4 px-10">
        {/* Logo section start */}
        <div className="flex items-center">
          <Link to="/">
            <img className="w-2/5" src={logo} alt="S-trade" />
          </Link>
        </div>
        {/* Search section start  */}
        <div className="col-span-2 my-3 flex items-center space-x-4">
          <form className="w-full">
            <div className="px-4 flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
              <input
                type="text"
                className="block w-full flex-1 px-3 focus:outline-none"
                placeholder="Search your favourite product"
              />
              <span className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-400 p-2 hover:bg-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
          </form>
        </div>
        {/* Cart and User section start  */}
        <div className="bg-white flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* notification */}
            <button
              type="button"
              className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-[#f7f7f7] rounded-full"
              onMouseOver={() => SetCart(false)}
              onClick={() => Setnotification(!notification)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-medium text-white bg-green-500 border-2 border-white rounded-full top-1 right-2 dark:border-gray-900">
                {}
              </div>
            </button>

            {/* cart */}
            <button
              type="button"
              className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  bg-[#f7f7f7] rounded-full"
              onClick={() => SetCart(!pcart)}
              onMouseOver={() => Setnotification(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full top-1 right-1 dark:border-gray-900">
                8
              </div>
            </button>
          </div>
          {/* User info */}
          <div className="flex justify-center items-center">
            {user?.displayName ? (
              <>
                <div className="flex justify-center items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  {/* User name and status */}
                  <div className="">
                    <p className="text-xs uppercase">
                      {user?.displayName.slice(0, 11)}
                    </p>
                    <p className="text-left text-sm text-green-600">Online</p>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={logOut}
                    className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-400"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-400">
                    Login
                  </button>
                </Link>
                <Link to="/Register">
                  <button className="px-3 py-2 ml-4 bg-blue-700 text-white rounded-lg hover:bg-blue-400">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div
          className={`absolute left-[69%] bg-slate-300 top-28 ${
            pcart
              ? "opacity-1  visible transition ease-in-out duration-1000"
              : "opacity-0  hidden transition ease-in-out duration-1000"
          } `}
        >
          <Modal></Modal>
        </div>
        <div
          className={`absolute left-[50.2%] bg-slate-300 top-28 ${
            notification
              ? "opacity-1 visible transition ease-in-out duration-1000"
              : "opacity-0 hidden transition ease-in-out duration-1000"
          } `}
        >
          <CartModal></CartModal>
        </div>
      </div>

      {/* Navigation Footer Start  */}
      <div className="bg-white px-10 py-3 flex justify-between border border-b-1 border-gray-300">
        <div className="space-x-3">
          <span>Popular Search : </span>
          <Link
            to={"/categories"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>All Categories</span>
          </Link>
          <Link
            to={"/categories/mansfashion"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Man Fashion</span>
          </Link>
          <Link
            to={"/categories/womensfashion"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Women Fashion</span>
          </Link>
          <Link
            to={"/categories/gadget"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Gadget</span>
          </Link>
          <Link
            to={"/categories/coumputer&laptop"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Computer & Laptop</span>
          </Link>
          <Link
            to={"/categories/kidsfashion"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Kids Fashion</span>
          </Link>

          <Link
            to={"/categories/sports"}
            className="transition-all ease-in-out hover:rounded-lg hover:px-2 hover:py-2 hover:border-b-2 hover:border-blue-300 duration-500 "
          >
            <span>Sports</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
