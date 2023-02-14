import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer.component";
import Navigation from "../Shared/Navigation.component";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="grid grid-cols-12 mx-10 my-2">
          <div>
            <h1 className="font-semibold">PRODUCT</h1>
          </div>
          <div className="col-span-8">
            <h1 className="font-semibold">{""}</h1>
          </div>
          <div>
            <h1 className="font-semibold">PRICE</h1>
          </div>
          <div>
            <h1 className="font-semibold">QUANTITY</h1>
          </div>
          <div>
            <h1 className="font-semibold">SUBTOTAL</h1>
          </div>
        </div>
        <hr className="mx-10" />
        <div className="grid grid-cols-12 mx-10 items-center">
          <div className="col-span-1 my-2">
            <img
              width={100}
              src="https://i.ibb.co/8K6cJ05/Whats-App-Image-2023-01-12-at-17-50-29.jpg"
              alt=""
            />
          </div>
          <div className="col-span-8 flex justify-center items-center ">
            <h1 className="">Youth The Child Bluetooth Headphones</h1>
          </div>
          <div className="col-span-1 w-full">
            <h1>$15</h1>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <h1>1</h1>
          </div>
          <div className="col-span-1">
            <h1>$15</h1>
          </div>
        </div>
        <hr className="mx-10" />
        <div className="grid grid-cols-12 mx-10 items-center py-2">
          <div className="col-span-9"></div>
          <div className="col-span-1">
            <h1> Subtotal</h1>
          </div>
          <div className="col-span-1">
            <h1>{""}</h1>
          </div>
          <div className="col-span-1">
            <h1>$15.00</h1>
          </div>
        </div>
        <hr className="mx-10" />
        <div className="flex justify-between mx-10  my-6">
          <Link to="/productDetails">
            <div className="flex justify-center items-center hover:-translate-x-3 hover:cursor-pointer">
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
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <button className="text-sm tracking-widest leading-loose ">
                CONTINUE
              </button>
            </div>
          </Link>
          <Link to="/checkout">
            <button className="bg-orange-400 rounded-lg my-2 py-2 px-4 text-white hover:shadow-lg hover:bg-orange-300">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
