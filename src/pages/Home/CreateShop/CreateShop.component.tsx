import React from "react";

const CreateShop = () => {
  return (
    <div>
      {/* Create shop section start */}
      <section className="mx-10 my-10">
        <h1 className="text-3xl font-semibold mb-2">
          Now it's easier to open your shop
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          With simple step by step and easy help instructions to follow
        </p>
        <button className="flex justify-between items-center text-white text-sm px-4 py-3 bg-purple-800 rounded-lg mb-10">
          Open Shop
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
        <hr />
      </section>
    </div>
  );
};

export default CreateShop;
