import React from "react";
import laptop from "../../../images/home/todayProducts/laptop.jpeg";
import keyboard from "../../../images/home/todayProducts/keyboard.jpeg";
import shoe from "../../../images/home/todayProducts/shoe.jpeg";
import mobile from "../../../images/home/todayProducts/mobile.jpeg";
import tShirt from "../../../images/home/todayProducts/t-shirt.jpeg";
import banner from "../../../images/home/todayProducts/banner.jpeg";

const TodayProducts = () => {
  return (
    <>
      {/* Today Products section start  */}
      <section className="mx-10 my-12">
        <h1 className="text-3xl font-semibold mb-10">Today Is Only For You</h1>
        <div className="grid grid-cols-5 gap-4 mb-10">
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={laptop}
                alt="laptop"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Computer & Laptop
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Neve Strix Pro L123 (2021) - TP399K 1TB
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$415.10</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.7
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                  Kota Bandung
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">120</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={keyboard}
                alt="keyboard"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Computer & Laptop
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Dark King M346 Mechanical Keyboard - Free 31 Keys
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$12.54</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.8
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Jakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">120</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={shoe}
                alt="shoe"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Fashion Man
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Reader Touring Coboy Brc Black Leather Boots
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$23.24</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.9
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Surabaya
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">450</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={mobile}
                alt="mobile"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Gudget Electronic
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Meta Galaxy X oliw10 5G sintra 256 GB
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$11.00</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.9
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Yogyakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">540</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={tShirt}
                alt="tShirt Headphon"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Fashion
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Overflow.id - Basic plain black t-shirt
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$17.34</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.8
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Jakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">200</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={laptop}
                alt="laptop"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Computer & Laptop
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Neve Strix Pro L123 (2021) - TP399K 1TB
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$415.10</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.7
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                  Kota Bandung
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">120</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={keyboard}
                alt="keyboard"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Computer & Laptop
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Dark King M346 Mechanical Keyboard - Free 31 Keys
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$12.54</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.8
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Jakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">120</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={shoe}
                alt="shoe"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Fashion Man
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Reader Touring Coboy Brc Black Leather Boots
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$23.24</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.9
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Surabaya
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">450</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={mobile}
                alt="mobile"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Gudget Electronic
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Meta Galaxy X oliw10 5G sintra 256 GB
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$11.00</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.9
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Yogyakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">540</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="overflow-hidden">
              <img
                className="w-full duration-500 transition-all hover:scale-150 hover:cursor-pointer"
                src={tShirt}
                alt="tShirt Headphon"
              />
            </div>
            <div className="bg-white p-3">
              <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
                Fashion
              </span>
              <p className="font-semibold mb-3.5 mt-2">
                Overflow.id - Basic plain black t-shirt
              </p>
              <div className="flex justify-between items-center mb-3.5">
                <p>
                  <span className="font-semibold">$17.34</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_386)">
                        <rect
                          width="20"
                          height="20"
                          rx="10"
                          fill="url(#paint0_linear_3_386)"
                        />
                        <path
                          d="M10.4997 13.0155L7.10042 15L8.02455 11.2963L5 8.81979L8.97009 8.51575L10.4997 5L12.0293 8.51575L16 8.81979L12.9749 11.2963L13.899 15L10.4997 13.0155Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3_386"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E65C00" />
                          <stop offset="1" stopColor="#F9D423" />
                        </linearGradient>
                        <clipPath id="clip0_3_386">
                          <rect width="20" height="20" rx="10" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  4.8
                </p>
              </div>
              <div className="flex justify-between gap-3 items-center text-xs">
                <p className="flex items-center">
                  <span className="mr-1">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3_392)">
                        <path
                          d="M12.2427 11.3995L8 15.5L3.75734 11.3995C2.91823 10.5885 2.34679 9.55518 2.11529 8.43029C1.88378 7.3054 2.0026 6.13942 2.45673 5.0798C2.91086 4.02017 3.67989 3.1145 4.66659 2.4773C5.65328 1.8401 6.81332 1.5 8 1.5C9.18668 1.5 10.3467 1.8401 11.3334 2.4773C12.3201 3.1145 13.0891 4.02017 13.5433 5.0798C13.9974 6.13942 14.1162 7.3054 13.8847 8.43029C13.6532 9.55518 13.0818 10.5885 12.2427 11.3995ZM8 8.5876C8.35362 8.5876 8.69276 8.45183 8.94281 8.21016C9.19286 7.96849 9.33333 7.64071 9.33333 7.29894C9.33333 6.95716 9.19286 6.62939 8.94281 6.38772C8.69276 6.14604 8.35362 6.01027 8 6.01027C7.64638 6.01027 7.30724 6.14604 7.05719 6.38772C6.80714 6.62939 6.66667 6.95716 6.66667 7.29894C6.66667 7.64071 6.80714 7.96849 7.05719 8.21016C7.30724 8.45183 7.64638 8.5876 8 8.5876Z"
                          fill="#BF00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_392">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Kota Jakarta
                </p>
                <p className="text-slate-400">
                  <span className="mr-0.5">200</span>
                  <span>Sold</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full" src={banner} alt="banner" />
        </div>
      </section>
    </>
  );
};

export default TodayProducts;
