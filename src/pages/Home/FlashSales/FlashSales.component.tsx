import React from "react";
import { Link } from "react-router-dom";
import products from "./flashSalesProduct.json";
import FlashSalesTime from "./FlashSalesTime";





const FlashSales = () => {
  const flashproducts = products.slice(14, 20);
  return (
    <div className="my-10">
      {/* Flash Sale section start  */}
      <div className="bg-slate-100 p-10">
        <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mb-10">
          November Super Flash Sale ⚡
        </h1>
        <FlashSalesTime flaashsalestime={80000}></FlashSalesTime>
        </div>
        {/* Products cards start  */}
        <div className="grid grid-cols-6 gap-4">
          {flashproducts?.map((product) => (
            <div className="rounded-lg overflow-hidden mx-w-sm">
              {/* cart image */}
              <div className="overflow-hidden">
                <Link to={`/productDetails/${product.productId}`}>
                  {" "}
                  <img
                    className="w-full duration-500 transition-all hover:scale-125 hover:cursor-pointer"
                    src={product.productImage}
                    alt="bottle"
                  />
                </Link>
              </div>
              {/* card body */}
              <div className="bg-white p-3">
                <span className="mb-2 text-xs text-slate-400">Property</span>
                <p className="font-semibold mb-3.5">{product.productName}</p>
                <div className="flex justify-between items-center mb-3.5">
                  <p>
                    <span className="line-through text-slate-400">
                      ৳{product.productPrice}
                    </span>{" "}
                    <span className="font-semibold">
                      ৳
                      {Math.ceil(
                        Number(product.productPrice) -
                          (Number(product.productDiscount) / Number(100)) *
                            Number(product.productPrice)
                      )}
                    </span>
                  </p>
                  <p className="font-semibold py-1 px-1.5 rounded-md bg-red-100 text-[#FF0000]">
                    {product.productDiscount}%
                  </p>
                </div>
                <div className="flex justify-center gap-3 items-center text-xs">
                  <div className="h-2.5 w-full text-center bg-gray-100 rounded-full">
                    <div className="rounded-full h-full w-2/4 bg-gradient-to-r from-orange-500 to-amber-400"></div>
                  </div>
                  <p className="text-slate-400">
                    <span className="mr-0.5">{product.productSold}</span>
                    <span>Sold</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
