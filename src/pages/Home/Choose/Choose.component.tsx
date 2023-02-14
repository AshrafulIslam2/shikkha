import React from "react";
import alarmClock from "../../../images/home/choose/alarm-clock.jpeg";
import cap from "../../../images/home/choose/cap.jpeg";
import tab from "../../../images/home/choose/tab.jpeg";
import mobile from "../../../images/home/choose/mobile.jpeg";
import shoes from "../../../images/home/choose/shoes.jpeg";
import coat from "../../../images/home/choose/coat.jpeg";
import perfume from "../../../images/home/choose/perfume.jpeg";
import key from "../../../images/home/choose/keyboard.jpeg";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <>
      {/* Easier to choose section start  */}
      <section className="mx-10 my-12">
        {/* choose section heading */}
        <div className="mb-10">
          <span className="text-3xl font-semibold mb-10 mr-4">
            Now Easier to Choose
          </span>
          <span className="font-medium py-1.5 px-2 text-sm bg-violet-100 text-violet-800 rounded-md">
            New Features
          </span>
        </div>
        {/* Choose Section card start */}
        <div className="grid grid-cols-5 gap-4 mb-8">
        <Link to={"/catagoris"}>  <div className="bg-purple-400 py-3 px-6 rounded-lg">
            <div className="flex gap-3 items-center mb-8">
              <span>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37"
                    height="38"
                    rx="8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M18.4997 30C16.9968 29.9999 15.5286 29.5378 14.2854 28.6736C13.0423 27.8094 12.0815 26.583 11.5277 25.1534C10.974 23.7238 10.8527 22.1569 11.1797 20.656C11.5066 19.155 12.2667 17.7892 13.3615 16.7355C14.7035 15.4432 17.9997 13.1163 17.4996 8C23.4999 12.093 26.5 16.186 20.4998 22.3256C21.4998 22.3256 22.9999 22.3256 25.5 19.7981C25.77 20.5891 26 21.4394 26 22.3256C26 24.361 25.2098 26.313 23.8032 27.7522C22.3966 29.1914 20.4889 30 18.4997 30Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-white">Popular Product</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p>Product</p>
              <p>341 Stock</p>
            </div>
          </div></Link>
          <Link to={"/catagoris"}>
          <div className="bg-teal-400 py-3 px-6 rounded-lg">
            <div className="flex gap-3 items-center mb-8">
              <span>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37"
                    height="38"
                    rx="8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M24.2832 23.3911L28.5 27.6069L27.1069 29L22.8911 24.7832C21.3224 26.0407 19.3713 26.7246 17.3609 26.7218C12.4697 26.7218 8.5 22.7521 8.5 17.8609C8.5 12.9697 12.4697 9 17.3609 9C22.2521 9 26.2218 12.9697 26.2218 17.8609C26.2246 19.8713 25.5407 21.8224 24.2832 23.3911ZM22.3082 22.6605C23.5577 21.3756 24.2555 19.6532 24.2527 17.8609C24.2527 14.0527 21.1681 10.9691 17.3609 10.9691C13.5527 10.9691 10.4691 14.0527 10.4691 17.8609C10.4691 21.6681 13.5527 24.7527 17.3609 24.7527C19.1532 24.7555 20.8756 24.0577 22.1605 22.8082L22.3082 22.6605Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-white">Most Wanted</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p>Product</p>
              <p>162 Stock</p>
            </div>
          </div>
          </Link>
          <Link to={"/catagoris"}>
          <div className="bg-red-400 py-3 px-6 rounded-lg">
            <div className="flex gap-3 items-center mb-8">
              <span>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37"
                    height="38"
                    rx="8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M12.9444 9.60526V17.3421L18.5 14.5789L24.0556 17.3421V9.60526H27.3889C27.6836 9.60526 27.9662 9.72171 28.1746 9.92899C28.3829 10.1363 28.5 10.4174 28.5 10.7105V28.3947C28.5 28.6879 28.3829 28.969 28.1746 29.1763C27.9662 29.3836 27.6836 29.5 27.3889 29.5H9.61111C9.31643 29.5 9.03381 29.3836 8.82544 29.1763C8.61706 28.969 8.5 28.6879 8.5 28.3947V10.7105C8.5 10.4174 8.61706 10.1363 8.82544 9.92899C9.03381 9.72171 9.31643 9.60526 9.61111 9.60526H12.9444ZM18.5 14.0263L13.5 8.5H23.5L18.5 14.0263ZM19.6111 17.6029L18.5 17.0503L17.3889 17.6029V27.2895H19.6111V17.6029ZM21.8333 20.6579V22.8684H26.2778V20.6579H21.8333Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-white">Popular Product</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p>Product</p>
              <p>341 Stock</p>
            </div>
          </div>
          </Link>
          <Link to={"/catagoris"}>
          <div className="bg-orange-400 py-3 px-6 rounded-lg">
            <div className="flex gap-3 items-center mb-8">
              <span>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37"
                    height="38"
                    rx="8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M23 9.5C26.038 9.5 28.5 12.0676 28.5 15.6622C28.5 22.8514 21 26.9595 18.5 28.5C16 26.9595 8.5 22.8514 8.5 15.6622C8.5 12.0676 11 9.5 14 9.5C15.86 9.5 17.5 10.527 18.5 11.5541C19.5 10.527 21.14 9.5 23 9.5Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-white">Bestseller</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p>Product</p>
              <p>422 Stock</p>
            </div>
          </div>
          </Link>
          <Link to={"/catagoris"}>
          <div className="bg-rose-400 py-3 px-6 rounded-lg">
            <div className="flex gap-3 items-center mb-8">
              <span>
                <svg
                  width="37"
                  height="38"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37"
                    height="38"
                    rx="8"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M28.4979 27V29H8.4999V27H9.4998V20.242C8.88423 19.8311 8.37962 19.2745 8.03077 18.6218C7.68191 17.969 7.49959 17.2402 7.5 16.5C7.5 15.673 7.72398 14.876 8.13294 14.197L10.8447 9.5C10.9324 9.34798 11.0586 9.22175 11.2106 9.13398C11.3626 9.04621 11.5351 9 11.7106 9H25.2882C25.4637 9 25.6361 9.04621 25.7881 9.13398C25.9401 9.22175 26.0664 9.34798 26.1541 9.5L28.8558 14.182C29.4523 15.1729 29.6441 16.3555 29.3912 17.4841C29.1383 18.6127 28.4602 19.6005 27.498 20.242V27H28.4979ZM12.2885 11L9.85576 15.213C9.61936 15.7971 9.61227 16.449 9.8359 17.0382C10.0595 17.6273 10.4974 18.1103 11.0618 18.3904C11.6263 18.6705 12.2757 18.7271 12.88 18.5488C13.4844 18.3706 13.9992 17.9706 14.3213 17.429C14.6563 16.592 15.8412 16.592 16.1771 17.429C16.3624 17.8934 16.6827 18.2916 17.0966 18.5721C17.5104 18.8526 17.9989 19.0025 18.4989 19.0025C18.9989 19.0025 19.4873 18.8526 19.9012 18.5721C20.3151 18.2916 20.6354 17.8934 20.8207 17.429C21.1556 16.592 22.3405 16.592 22.6765 17.429C22.8062 17.7484 23.0007 18.0376 23.2475 18.2783C23.4944 18.519 23.7884 18.706 24.111 18.8275C24.4337 18.9491 24.778 19.0026 25.1223 18.9847C25.4666 18.9668 25.8034 18.8778 26.1117 18.7234C26.42 18.569 26.693 18.3525 26.9136 18.0875C27.1342 17.8225 27.2975 17.5148 27.3935 17.1836C27.4894 16.8524 27.5157 16.5049 27.4709 16.1631C27.4261 15.8212 27.3111 15.4923 27.133 15.197L24.7083 11H12.2895H12.2885Z"
                    fill="white"
                  />
                </svg>
              </span>
              <p className="text-white">Best Shop 2022</p>
            </div>
            <div className="flex justify-between items-center text-white">
              <p>Product</p>
              <p>341 Stock</p>
            </div>
          </div>
          </Link>
        </div>
        <hr></hr>
        {/* Choose section footer  */}
        <div className="grid grid-cols-4 gap-4 mt-10 font-semibold">
          <div className="border border-gray-300 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-1 h-11 bg-blue-500 mr-3"></div>
              <p>The goods are ready stock and ready to be shipped</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img className="w-2/4" src={alarmClock} alt="alarm clock" />
              <img className="w-2/4" src={cap} alt="cap" />
            </div>
          </div>
          <div className="border border-gray-400 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-1 h-11 bg-blue-500 mr-3"></div>
              <p>The goods are ready stock and ready to be shipped</p>
            </div>
            <div className="flex justify-center items-center gap-2 font-bold">
              <img className="w-2/4" src={tab} alt="alarm clock" />
              <img className="w-2/4" src={mobile} alt="cap" />
            </div>
          </div>
          <div className="border border-gray-400 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-1 h-11 bg-blue-500 mr-3"></div>
              <p>The goods are ready stock and ready to be shipped</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img className="w-2/4" src={shoes} alt="alarm clock" />
              <img className="w-2/4" src={coat} alt="cap" />
            </div>
          </div>
          <div className="border border-gray-400 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-1 h-11 bg-blue-500 mr-3"></div>
              <p>The goods are ready stock and ready to be shipped</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img className="w-2/4" src={perfume} alt="alarm clock" />
              <img className="w-2/4" src={key} alt="cap" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
