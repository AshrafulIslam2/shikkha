import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer.component";
import Navigation from "../../../Shared/Navigation.component";

import { HiOutlineBars2, HiBars3 } from "react-icons/hi2";
import { BsColumns } from "react-icons/bs";
import AllProducts from "./AllProducts.json";

const Allproducts = () => {
  const [colum, SetColumn] = useState("4");

  //This state use for show Orginal Products
  const [products, SetProducts] = useState(AllProducts);
  // This is use for filter products which is copy of orginal products
  const AllPRODUCTS = [...AllProducts];
  //productsshowflag
  const [flag, setfalg] = useState(true);
  //This state is use freeDelivary filter
  const [freeDelivary, SetfreeDelivary] = useState(false);
  //This state is use ExpressDelivary filter
  const [ExpressDelivary, SetExpressDelivary] = useState(false);

  // This state for filter as per size
  const [Size, SetSize] = useState([]);

  const [Brand, SetBrand] = useState([]);
  const [Color, SetColor] = useState([]);

  const handleClick = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      SetSize([...Size, value]);
    } else {
      SetSize(Size.filter((e) => e !== value));
    }
  };

  const handleBrand = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      SetBrand([...Brand, value]);
    } else {
      SetBrand(Brand.filter((e) => e !== value));
    }
  };
  const handlecolor = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      SetColor([...Color, value]);
    } else {
      SetColor(Color.filter((e) => e !== value));
    }
  };
  //state for accending decending filter
  const [
    FilterValueAssendingAndDecending,
    SetfiltervalueAssendingAndDecending,
  ] = useState("");

  //State for high low  filter
  const [FilterValueHighAndLow, SetfiltervalueHighandLow] = useState("");

  //only products Price
  const ProductsPrice = products.map((product) => {
    return product.productPrice;
  });

  // Max Price For  maximum price of products which is for  price wise filter
  const maxPrice = Math.max.apply(null, ProductsPrice);

  // Max Price For  maximum price of products which is for  price wise filter
  const minPrice = Math.min.apply(null, ProductsPrice);

  //FIlter For High to Low
  const [filteredPrice, setFilteredPrice] = useState(minPrice);

  if (FilterValueHighAndLow === "high") {
    const compairfuntion = (a, b) => {
      return b.productPrice - a.productPrice;
    };
    products.sort(compairfuntion);
  }

  ////FIlter For Low to High
  if (FilterValueHighAndLow === "low") {
    const compairfuntion = (a, b) => {
      return a.productPrice - b.productPrice;
    };
    products.sort(compairfuntion);
  }

  ////FIlter For Accending to Decending
  if (FilterValueAssendingAndDecending === "accending") {
    products.sort((a, b) => a.productName.localeCompare(b.productName));
  }

  ////FIlter For Decending to Accending
  if (FilterValueAssendingAndDecending === "descending") {
    products.sort((a, b) => b.productName.localeCompare(a.productName));
  }

  const filteredProductsbasedOnPrice = products.filter(
    (product) => parseInt(product.productPrice) <= filteredPrice
  );

  // Delivery Filter
  useEffect(() => {
    if (freeDelivary === true && ExpressDelivary === true) {
      const filteredProductsbasedOnDelivery = AllPRODUCTS.filter(
        (product) =>
          product.FreeDelivary === freeDelivary &&
          product.ExpressDelivary === ExpressDelivary
      );
      SetProducts(filteredProductsbasedOnDelivery);
    } else if (freeDelivary === false && ExpressDelivary === true) {
      const filteredProductsbasedOnDelivery = AllPRODUCTS.filter(
        (product) => product.ExpressDelivary === ExpressDelivary
      );
      SetProducts(filteredProductsbasedOnDelivery);
    } else if (freeDelivary === true && ExpressDelivary === false) {
      const filteredProductsbasedOnDelivery = AllPRODUCTS.filter(
        (product) => product.FreeDelivary === freeDelivary
      );
      SetProducts(filteredProductsbasedOnDelivery);
    } else if (freeDelivary === false && ExpressDelivary === false) {
      SetProducts(AllProducts);
    } else {
      return AllProducts;
    }
  }, [freeDelivary, ExpressDelivary]);

  /// Function for All that products which have Size atribute
  const filterProductsAccordingtoSize = AllPRODUCTS.filter(
    (product) => product?.productSpecipication?.size
  );
  //const dummySize = "L";
  //const p = [];
  // Size wise Filtering
  useEffect(() => {
    const productsafterfilterbySize = [];
    filterProductsAccordingtoSize.forEach((product) =>
      Size.forEach((ds) =>
        product.productSpecipication.size.forEach((sz) => {
          if (ds === sz) {
            productsafterfilterbySize.push(product);
          }
        })
      )
    );
    // removie Duplicate array
    const UpdateProducts = productsafterfilterbySize.filter(
      (p, index) => productsafterfilterbySize.indexOf(p) === index
    );
    if (UpdateProducts.length > 0) {
      SetProducts(UpdateProducts);
    } else {
      SetProducts(AllProducts);
    }
  }, [Size]);

  // const FilteredProducts = filterProductsAccordingtoSize.filter((product) =>
  //   product.productSpecipication.size.map(
  //     (s) => s === dummySize && p.push(product)
  //   )
  // );

  return (
    <div>
      <Navigation></Navigation>
      <div className="bg-[#f7f7f7]">
        <div className="grid grid-cols-12">
          <div className="col-span-3 mt-3">
            <div className="bg-white rounded-lg mb-4 mx-3">
              <h1 className="text-lg font-semibold mx-2 pt-2">Category</h1>
              <ul className="mx-2 pb-2">
                <Link
                  to={"/categories/mansfashion"}
                  className="transition-all  hover:bg-[red] duration-500 ease-in-out"
                >
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Man Fashion
                  </li>
                </Link>
                <Link to={"/categories/womensfashion"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Woman Fashion
                  </li>
                </Link>
                <Link to={"/categories/kidsfashion"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Kids Fashion
                  </li>
                </Link>
                <Link to={"/categories/voucher"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Voucher
                  </li>{" "}
                </Link>
                <Link to={"/categories/sports"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Sports
                  </li>
                </Link>
                <Link to={"/categories/gadget"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Gadget
                  </li>{" "}
                </Link>
                <Link to={"/categories/coumputer&laptop"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Computer & Laptop
                  </li>{" "}
                </Link>
                <Link to={"/categories/game"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Games
                  </li>{" "}
                </Link>
                <Link to={"/categories/property"}>
                  <li className="text-sm pb-1 transition-all  hover:bg-[#f7f7f7] hover:rounded-lg duration-500 ease-in-out">
                    Property
                  </li>{" "}
                </Link>
              </ul>
            </div>
            <div className="bg-white rounded-lg mb-4 mx-3">
              <h1 className="text-lg font-semibold mx-2">Size</h1>
              <div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"XL"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>XL</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"M"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>M</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"L"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>L</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"S"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>S</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"40"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>40"</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"41"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>41"</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"42"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>42"</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"43"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>43"</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"44"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>44"</label>
                </div>
                <div className="mx-2 pb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    value={"45"}
                    onChange={(e) => handleClick(e)}
                  />
                  <label>45"</label>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg  pb-2 mb-4 mx-3">
              <div className="mx-2 pb-2">
                <h1 className="text-lg font-semibold">Delivery</h1>
                <div>
                  <div className="">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onClick={() => SetExpressDelivary(!ExpressDelivary)}
                    />
                    <label>Express Delivery</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      onClick={() => SetfreeDelivary(!freeDelivary)}
                    />
                    <label>Free Delivery</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg mb-4 pb-4 mx-3">
              <h1 className="text-lg font-semibold mx-2">Price</h1>
              <h1 className="mx-2 text-slate-200">{filteredPrice}</h1>
              <div className="flex justify-start ml-2">
                <span className=" mr-4"></span>
                <span className="">
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step="1"
                    value={filteredPrice}
                    onChange={(e) => setFilteredPrice(e.target.value)}
                    onClick={() => setfalg(false)}
                  />
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg mb-4 pb-4 mx-3">
              <div className="mx-2 pb-2">
                <h1 className="text-lg font-semibold">Brand</h1>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"bata"}
                      onChange={(e) => handleBrand(e)}
                    />
                    <label>Bata</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"apex"}
                      onChange={(e) => handleBrand(e)}
                    />
                    <label>Apex</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"nike"}
                      onChange={(e) => handleBrand(e)}
                    />
                    <label>Nike</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"asus"}
                      onChange={(e) => handleBrand(e)}
                    />
                    <label>Asus</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"vivo"}
                      onChange={(e) => handleBrand(e)}
                    />
                    <label>Vivo</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg mb-4 pb-4 mx-3">
              <div className="mx-2 pb-2">
                <h1 className="text-lg font-semibold">Color</h1>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"red"}
                      onChange={(e) => handlecolor(e)}
                    />
                    <label>Red</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"black"}
                      onChange={(e) => handlecolor(e)}
                    />
                    <label>Black</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"white"}
                      onChange={(e) => handlecolor(e)}
                    />
                    <label>White</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"pink"}
                      onChange={(e) => handlecolor(e)}
                    />
                    <label>Pink</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"orange"}
                      onChange={(e) => handlecolor(e)}
                    />
                    <label>Orange</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="bg-white flex justify-between py-4 rounded-lg px-3 mx-3 my-3">
              <div className="flex ">
                <h1 className="mr-4">Short By</h1>
                <div>
                  <form action="">
                    <select
                      name="high&low"
                      id=""
                      className="mr-3"
                      onClick={(e) => SetfiltervalueHighandLow(e.target.value)}
                    >
                      <option value="" disabled>
                        Defult
                      </option>
                      <option value="high">High to low</option>
                      <option value="low">Low to High</option>
                    </select>
                    <select
                      name="accending&decending"
                      id=""
                      onClick={(e) =>
                        SetfiltervalueAssendingAndDecending(e.target.value)
                      }
                    >
                      <option value="accending">A-Z</option>
                      <option value="descending">Z-A</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="flex ">
                <HiOutlineBars2
                  className="mr-4"
                  onClick={() => SetColumn("2")}
                ></HiOutlineBars2>
                <HiBars3
                  className="mr-4"
                  onClick={() => SetColumn("3")}
                ></HiBars3>
                <BsColumns onClick={() => SetColumn("4")}></BsColumns>
              </div>
            </div>
            <div>
              <div
                className={`grid grid-cols-${colum} gap-x-4 gap-y-3 mx-3 my-3`}
              >
                {flag
                  ? products.length !== 0 &&
                    products?.map((product) => (
                      <div
                        className="rounded-lg overflow-hidden mx-w-sm"
                        key={product.productId}
                      >
                        {/* cart image */}
                        <div className="overflow-hidden">
                          <Link to={`/productDetails/${product.productId}`}>
                            {" "}
                            <img
                              className={` ${
                                colum && colum === "2"
                                  ? "w-[1000px]"
                                  : "w-[400px]"
                              } ${
                                colum && colum === "3"
                                  ? "w-[800px]"
                                  : "w-[400px]"
                              }  w-[400px] h-[300px] duration-500 transition-all hover:scale-125 hover:cursor-pointer`}
                              src={product.productImage}
                              alt="bottle"
                            />
                          </Link>
                        </div>
                        {/* card body */}
                        <div className="bg-white p-3">
                          <span className="mb-2 text-xs text-slate-400">
                            Property
                          </span>
                          <p className="font-semibold mb-3.5">
                            {product.productName}
                          </p>
                          <div className="flex justify-between items-center mb-3.5">
                            <p>
                              <span className="line-through text-slate-400">
                                ৳{product.productPrice}
                              </span>{" "}
                              <span className="font-semibold">
                                ৳
                                {Math.ceil(
                                  Number(product.productPrice) -
                                    (Number(product.productDiscount) /
                                      Number(100)) *
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
                              <span className="mr-0.5">
                                {product.productSold}
                              </span>
                              <span>Sold</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  : filteredProductsbasedOnPrice.length !== 0 &&
                    filteredProductsbasedOnPrice?.map((product) => (
                      <div
                        className="rounded-lg overflow-hidden mx-w-sm"
                        key={product.productId}
                      >
                        {/* cart image */}
                        <div className="overflow-hidden">
                          <Link to={`/productDetails/${product.productId}`}>
                            {" "}
                            <img
                              className={` ${
                                colum && colum === "2"
                                  ? "w-[1000px]"
                                  : "w-[400px]"
                              } ${
                                colum && colum === "3"
                                  ? "w-[800px]"
                                  : "w-[400px]"
                              }  w-[400px] h-[300px] duration-500 transition-all hover:scale-125 hover:cursor-pointer`}
                              src={product.productImage}
                              alt="bottle"
                            />
                          </Link>
                        </div>
                        {/* card body */}
                        <div className="bg-white p-3">
                          <span className="mb-2 text-xs text-slate-400">
                            Property
                          </span>
                          <p className="font-semibold mb-3.5">
                            {product.productName}
                          </p>
                          <div className="flex justify-between items-center mb-3.5">
                            <p>
                              <span className="line-through text-slate-400">
                                ৳{product.productPrice}
                              </span>{" "}
                              <span className="font-semibold">
                                ৳
                                {Math.ceil(
                                  Number(product.productPrice) -
                                    (Number(product.productDiscount) /
                                      Number(100)) *
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
                              <span className="mr-0.5">
                                {product.productSold}
                              </span>
                              <span>Sold</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Allproducts;
