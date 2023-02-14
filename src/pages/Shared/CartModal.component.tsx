/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CartModal = () => {
  return (
    <div
      className="w-screen max-w-sm p-8 pt-4 bg-white border-2 border-black"
      aria-modal="true"
      role="dialog"
    >
      <label
        htmlFor="my-modal"
        className="relative block ml-auto -mr-4 text-gray-600 transition hover:scale-110"
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="relative">
              <span className="absolute inset-0 translate-x-1 translate-y-1 bg-teal-500"></span>

              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="relative object-cover w-16 h-16 border-2 border-black"
              />
            </div>

            <div className="ml-4">
              <h3 className="font-mono text-sm">Ashraful Islam</h3>

              <dl className="mt-0.5 space-y-px font-mono text-[10px]">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>

          <li className="flex items-center">
            <div className="relative">
              <span className="absolute inset-0 translate-x-1 translate-y-1 bg-teal-500"></span>

              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="relative object-cover w-16 h-16 border-2 border-black"
              />
            </div>

            <div className="ml-4">
              <h3 className="font-mono text-sm">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px font-mono text-[10px]">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>

        <div className="space-y-4 text-center">
          <a
            href="#"
            className="block px-5 py-3 font-mono text-sm uppercase border-2 border-black hover:ring-1 hover:ring-black"
          >
            View my cart (2)
          </a>

          <a
            href="#"
            className="block px-5 py-3 font-mono text-sm text-white uppercase bg-teal-500 border-black hover:bg-teal-600"
          >
            Checkout
          </a>

          <a
            href="#"
            className="inline-block font-mono text-sm underline uppercase underline-offset-4 hover:opacity-75"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
