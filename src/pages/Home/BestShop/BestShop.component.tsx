import React from "react";
import shoes from "../../../images/home/bestShop/shoes.jpeg";
import coats from "../../../images/home/bestShop/coats.jpeg";
import toys from "../../../images/home/bestShop/toys.jpeg";
import music from "../../../images/home/bestShop/cdPlayer.jpeg";
import cosmetics from "../../../images/home/bestShop/cosmetics.jpeg";
import airPlan from "../../../images/home/bestShop/airplan.jpeg";
import coatsLogo from "../../../images/home/bestShop/9.jpeg";
import toysLogo from "../../../images/home/bestShop/u.jpeg";
import musicLogo from "../../../images/home/bestShop/m.jpeg";
import cosmeticsLogo from "../../../images/home/bestShop/a.jpeg";

const BestShop = () => {
  return (
    <>
      {/* Best shop section start  */}
      <section className="mx-10 my-14">
        <h1 className="text-3xl font-semibold mb-10">
          Best Shop at The Moment
        </h1>
        <div className="grid grid-cols-5 gap-4 mb-12">
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="flex flex-col items-center">
              <img className="w-full" src={shoes} alt="shoes" />
              <img
                className="w-1/4 border-0 rounded-full -mt-8"
                src={airPlan}
                alt="airPlan"
              />
            </div>
            <div className="bg-white p-3">
              <div className="mt-1 mb-6 text-center">
                <p className="font-semibold mb-2">Super Shop</p>
                <span className="text-blue-800 flex justify-center items-center">
                  Verification
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M6.5 13.5C2.91005 13.5 0 10.5899 0 7C0 3.41005 2.91005 0.5 6.5 0.5C10.0899 0.5 13 3.41005 13 7C13 10.5899 10.0899 13.5 6.5 13.5ZM5.85195 9.6L10.4474 5.00385L9.52835 4.08475L5.85195 7.7618L4.0131 5.92295L3.094 6.84205L5.85195 9.6Z"
                      fill="#4364F7"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex justify-center items-center mb-3.5">
                <div className="text-center border-r-2 border-slate-400 pr-2 mr-2">
                  <p className="text-slate-400">Product</p>
                  <p className="">1,264</p>
                </div>

                <div className="text-center border-r-2 border-slate-400 pr-4 mr-2">
                  <p className="text-slate-400">Followed</p>
                  <p className="">5,325</p>
                </div>
                <div className="text-center mr-2">
                  <p className="text-slate-400">Sold</p>
                  <p className="">5,264</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="flex flex-col items-center">
              <img className="w-full" src={coats} alt="coats" />
              <img
                className="w-1/4 border-0 rounded-full -mt-8"
                src={coatsLogo}
                alt="coatsLogo"
              />
            </div>
            <div className="bg-white p-3">
              <div className="mt-1 mb-6 text-center">
                <p className="font-semibold mb-2">Super Shop</p>
                <span className="text-blue-800 flex justify-center items-center">
                  Verification
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M6.5 13.5C2.91005 13.5 0 10.5899 0 7C0 3.41005 2.91005 0.5 6.5 0.5C10.0899 0.5 13 3.41005 13 7C13 10.5899 10.0899 13.5 6.5 13.5ZM5.85195 9.6L10.4474 5.00385L9.52835 4.08475L5.85195 7.7618L4.0131 5.92295L3.094 6.84205L5.85195 9.6Z"
                      fill="#4364F7"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex justify-center items-center mb-3.5">
                <div className="text-center border-r-2 border-slate-400 pr-2 mr-2">
                  <p className="text-slate-400">Product</p>
                  <p className="">1,264</p>
                </div>

                <div className="text-center border-r-2 border-slate-400 pr-4 mr-2">
                  <p className="text-slate-400">Followed</p>
                  <p className="">5,325</p>
                </div>
                <div className="text-center mr-2">
                  <p className="text-slate-400">Sold</p>
                  <p className="">5,264</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="flex flex-col items-center">
              <img className="w-full" src={cosmetics} alt="cosmetics" />
              <img
                className="w-1/4 border-0 rounded-full -mt-8"
                src={cosmeticsLogo}
                alt="cosmeticsLogo"
              />
            </div>
            <div className="bg-white p-3">
              <div className="mt-1 mb-6 text-center">
                <p className="font-semibold mb-2">Super Shop</p>
                <span className="text-blue-800 flex justify-center items-center">
                  Verification
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M6.5 13.5C2.91005 13.5 0 10.5899 0 7C0 3.41005 2.91005 0.5 6.5 0.5C10.0899 0.5 13 3.41005 13 7C13 10.5899 10.0899 13.5 6.5 13.5ZM5.85195 9.6L10.4474 5.00385L9.52835 4.08475L5.85195 7.7618L4.0131 5.92295L3.094 6.84205L5.85195 9.6Z"
                      fill="#4364F7"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex justify-center items-center mb-3.5">
                <div className="text-center border-r-2 border-slate-400 pr-2 mr-2">
                  <p className="text-slate-400">Product</p>
                  <p className="">1,264</p>
                </div>

                <div className="text-center border-r-2 border-slate-400 pr-4 mr-2">
                  <p className="text-slate-400">Followed</p>
                  <p className="">5,325</p>
                </div>
                <div className="text-center mr-2">
                  <p className="text-slate-400">Sold</p>
                  <p className="">5,264</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="flex flex-col items-center">
              <img className="w-full" src={toys} alt="toys" />
              <img
                className="w-1/4 border-0 rounded-full -mt-8"
                src={toysLogo}
                alt="toysLogo"
              />
            </div>
            <div className="bg-white p-3">
              <div className="mt-1 mb-6 text-center">
                <p className="font-semibold mb-2">Super Shop</p>
                <span className="text-blue-800 flex justify-center items-center">
                  Verification
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M6.5 13.5C2.91005 13.5 0 10.5899 0 7C0 3.41005 2.91005 0.5 6.5 0.5C10.0899 0.5 13 3.41005 13 7C13 10.5899 10.0899 13.5 6.5 13.5ZM5.85195 9.6L10.4474 5.00385L9.52835 4.08475L5.85195 7.7618L4.0131 5.92295L3.094 6.84205L5.85195 9.6Z"
                      fill="#4364F7"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex justify-center items-center mb-3.5">
                <div className="text-center border-r-2 border-slate-400 pr-2 mr-2">
                  <p className="text-slate-400">Product</p>
                  <p className="">1,264</p>
                </div>

                <div className="text-center border-r-2 border-slate-400 pr-4 mr-2">
                  <p className="text-slate-400">Followed</p>
                  <p className="">5,325</p>
                </div>
                <div className="text-center mr-2">
                  <p className="text-slate-400">Sold</p>
                  <p className="">5,264</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 overflow-hidden mx-w-sm">
            <div className="flex flex-col items-center">
              <img className="w-full" src={music} alt="music" />
              <img
                className="w-1/4 border-0 rounded-full -mt-8"
                src={musicLogo}
                alt="musicLogo"
              />
            </div>
            <div className="bg-white p-3">
              <div className="mt-1 mb-6 text-center">
                <p className="font-semibold mb-2">Super Shop</p>
                <span className="text-blue-800 flex justify-center items-center">
                  Verification
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M6.5 13.5C2.91005 13.5 0 10.5899 0 7C0 3.41005 2.91005 0.5 6.5 0.5C10.0899 0.5 13 3.41005 13 7C13 10.5899 10.0899 13.5 6.5 13.5ZM5.85195 9.6L10.4474 5.00385L9.52835 4.08475L5.85195 7.7618L4.0131 5.92295L3.094 6.84205L5.85195 9.6Z"
                      fill="#4364F7"
                    />
                  </svg>
                </span>
              </div>

              <div className="flex justify-center items-center mb-3.5">
                <div className="text-center border-r-2 border-slate-400 pr-2 mr-2">
                  <p className="text-slate-400">Product</p>
                  <p className="">1,264</p>
                </div>

                <div className="text-center border-r-2 border-slate-400 pr-4 mr-2">
                  <p className="text-slate-400">Followed</p>
                  <p className="">5,325</p>
                </div>
                <div className="text-center mr-2">
                  <p className="text-slate-400">Sold</p>
                  <p className="">5,264</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestShop;
