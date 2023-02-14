import React, { useEffect, useState } from "react";
// import Rating from "react-rating";
import { Rating } from "react-simple-star-rating";
import Footer from "../Shared/Footer.component";
import Navigation from "../Shared/Navigation.component";
// import headPhone from "../../images/product-details/headphon.jpeg";
import { Link, useParams } from "react-router-dom";
import Description from "./Description/Description.component";
import Specification from "./Specification/Specification.component";
import Return from "./Shiping&Returns/Return.component";
import products from "../Home/FlashSales/flashSalesProduct.json";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [component, setComponent] = useState("description");

  const handleProductInfo = (slug: string) => {
    if (slug === "description") {
      setComponent("description");
    } else if (slug === "specification") {
      setComponent("specification");
    } else if (slug === "return") {
      setComponent("return");
    }
  };

  const { id } = useParams();
  const product = products.find((product: any) => product.productId === id);
  const discountParcentage = Number(product?.productDiscount) / 100;
  const discountPrice =
    Number(discountParcentage) * Number(product?.productPrice);
  const afterDiscountPrice = Math.ceil(
    Number(product?.productPrice) - Number(discountPrice)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="bg-slate-100">
        {/* product title, image and info */}
        <div className="mx-10 pt-5 pb-10">
          {/* product navigation */}
          <ul className="uppercase flex items-center space-x-2">
            <li>
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <li>GADGET & ELECTRONICS</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <li>Computer</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <li>Computer Accessories</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <li>Headphone</li>
          </ul>
          <div></div>
          {/* product details */}
          <div className="bg-white grid grid-cols-3 gap-4 mt-3 rounded-md p-4 ">
            {/* product info */}
            <div className="col-span-2">
              <h1 className="text-4xl mb-2 font-semibold">
                {product?.productName}
              </h1>
              <p className="text-lg text-gray-400 my-2">
                Brand: {product?.productBrand} | SOLD BY:{" "}
                {product?.productStoreName}
              </p>
              <p className="text-3xl text-red-500 font-bold ">
                ৳{afterDiscountPrice}
              </p>
              <p>
                <span className="text-gray-400 font-medium line-through mr-2">
                  ৳{product?.productPrice}
                </span>
                <span className="text-red-500 my-2">
                  ({product?.productDiscount}%)
                </span>
              </p>
              <div className="flex my-4">
                <Rating initialValue={1} iconsCount={1} size={20} readonly />{" "}
                <Rating initialValue={1} iconsCount={1} size={20} readonly />{" "}
                <Rating initialValue={1} iconsCount={1} size={20} readonly />{" "}
                <Rating initialValue={1} iconsCount={1} size={20} readonly />{" "}
                <Rating initialValue={1} iconsCount={1} size={20} readonly />{" "}
                <p className="text-slate-400"> (5 review)</p>
              </div>
              {/* counter */}
              <div className="flex items-center my-3">
                <button
                  onClick={(event: any) => {
                    setCount(count - 1);
                  }}
                  disabled={count <= 1}
                  className={`${
                    count <= 1
                      ? "cursor-not-allowed text-xl font-bold bg-gray-100 hover:bg-blue-200 px-1.5 py-1.5 mr-1 rounded-full"
                      : "text-xl font-bold bg-gray-100 hover:bg-blue-400 px-1.5 py-1.5 mr-1 rounded-full"
                  }`}
                >
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
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <p className="px-8 py-1.5 rounded-full bg-slate-50">{count}</p>
                <button
                  onClick={(event: any) => {
                    setCount(count + 1);
                  }}
                  className="text-xl font-bold bg-gray-100 hover:bg-blue-400 px-1.5 py-1.5 rounded-full ml-1"
                >
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
              {/* add to cart and buy now*/}
              <div className="my-4 flex items-center space-x-4">
                <Link to="/cart">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white flex items-center p-2 border border-gray-100 rounded-md">
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
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="ml-1">ADD TO CART</span>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="bg-yellow-400 hover:bg-yellow-500 flex items-center p-2 border border-gray-100 rounded-md">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span className="ml-1">BUY NOW</span>
                  </button>
                </Link>
              </div>
              <p className="text-slate-400 font-medium mb-3">
                Want more great deals?
                <span className="text-gray-500 text-lg hover:text-blue-400 cursor-pointer">
                  {" "}
                  Email us for more related product!
                </span>
              </p>
            </div>

            {/* product image */}
            <div className="">
              <img
                className="w-full h-full rounded-2xl"
                src={product?.productImage}
                alt="Headphone"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-500 flex space-x-6 items-center mt-5 mb-2">
              <button onClick={() => handleProductInfo("description")}>
                <span
                  className={
                    component === "description"
                      ? "text-black"
                      : "hover:text-black hover:underline hover:underline-offset-8 hover:cursor-pointer"
                  }
                >
                  Description
                </span>
              </button>
              <button onClick={() => handleProductInfo("specification")}>
                <span
                  className={
                    component === "specification"
                      ? "text-black"
                      : "hover:text-black hover:underline hover:underline-offset-8 hover:cursor-pointer"
                  }
                >
                  Specification
                </span>
              </button>
              <button onClick={() => handleProductInfo("return")}>
                <span
                  className={
                    component === "return"
                      ? "text-black"
                      : "hover:text-black hover:underline hover:underline-offset-8 hover:cursor-pointer"
                  }
                >
                  Shipping & Returns
                </span>
              </button>
              <span className="hover:text-black hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Reviews (4)
              </span>
            </p>
            {component === "description" && (
              <Description
                description={product?.productDescription}
                key="01"
              ></Description>
            )}
            {component === "specification" && (
              <Specification
                specifications={product?.productSpecipication}
                key="02"
              ></Specification>
            )}
            {component === "return" && (
              <Return returnPolicy={product?.productShipping} key="03"></Return>
            )}
          </div>
        </div>
        {/* product description */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
