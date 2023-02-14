import React, { useEffect } from "react";
import Footer from "../Shared/Footer.component";
import Navigation from "../Shared/Navigation.component";

const OrderDetails = () => {
  const orderDetails = [
    {
      orderID: "084638",
      paymentStatus: "paid",
      orderStatus: "Placed",
      orderPlacedTime: "1/12/2023, 5:45:26 PM",
      orderTotal: "15",
      shippingAdress: {
        name: "ashraful Islam",
        phone: "8801750567488",
        divisions: "Dhaka",
        city: "Dhaka",
        postalCode: "1212",
        Area: "Ajij Shorok",
      },
      products: [
        {
          shopName: "Strade",
          ProductStatus: "paid",
          productsName: "Youth The Child Bluetooth Headphones",
          productsImage:
            "https://i.ibb.co/8K6cJ05/Whats-App-Image-2023-01-12-at-17-50-29.jpg",
          productsQuantity: "1",
          productPrice: "15",
        },
      ],
      total: "15",
      subtotal: "15",
      deliveryCharge: "0",
    },
  ];
  console.log(orderDetails);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="mx-10 mt-10 ">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">ORDER DETAILS</h1>
          <h1 className=" text-xs mr-3">CANCEL ORDER</h1>
        </div>
        <div>
          {orderDetails.map((orderdetail) => (
            <>
              {/* firsrt Div */}
              <div className="bg-[#f7f7f7] flex justify-between rounded-lg my-3">
                <div>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px] ">
                    #{orderdetail.orderID}
                  </h1>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px] font-normal">
                    {orderdetail.orderStatus}
                  </h1>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px] font-normal">
                    {orderdetail.orderPlacedTime}
                  </h1>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px] font-normal">
                    Order total{" "}
                    <span className="font-semibold">
                      ${orderdetail.orderTotal}
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px]">
                    Payment Status
                  </h1>
                  <h1 className="mt-[13px] ml-[23px] mb-[35px] font-medium">
                    {orderdetail.paymentStatus}
                  </h1>
                </div>
                <div>
                  <h1 className="mt-[13px] mr-[23px] mb-[35px]">Order Total</h1>
                  <h1 className="mt-[13px] mr-[23px] mb-[35px] font-semibold text-center">
                    $<span className="text-lg">{orderdetail.orderTotal}</span>{" "}
                  </h1>
                </div>
              </div>
              {/* firsrt Div */}
              {/* Second Div */}
              <div className="bg-[#f7f7f7] flex justify-between rounded-lg my-3">
                <div>
                  <h1 className="mt-[13px] ml-[23px]  font-medium">
                    Shipping Address
                  </h1>
                  <h1 className=" ml-[23px] my-2 font-normal text-xs tracking-wider">
                    Name: <span> {orderdetail.shippingAdress.name}</span>
                  </h1>
                  <h1 className=" ml-[23px] my-2 font-normal text-xs tracking-wider">
                    Phone: <span> {orderdetail.shippingAdress.phone}</span>
                  </h1>
                  <h1 className=" ml-[23px] my-2 font-normal text-xs tracking-wider">
                    divisions:{" "}
                    <span> {orderdetail.shippingAdress.divisions}</span>
                  </h1>
                  <h1 className=" ml-[23px] my-2 font-normal text-xs tracking-wider">
                    city: <span> {orderdetail.shippingAdress.city}</span>
                  </h1>
                  <h1 className=" ml-[23px] mt-2 mb-4 font-normal text-xs tracking-wider">
                    Area: <span> {orderdetail.shippingAdress.Area}</span>
                  </h1>
                </div>
              </div>
              {/* Second Div */}
              {/* Third Div */}
              <div className="bg-[#f7f7f7]  rounded-lg">
                <div className="">
                  {orderdetail?.products?.map((product) => (
                    <>
                      <div className="border-2 border-dashed rounded-lg">
                        <h1 className="font-normal ml-4 mt-3">
                          {product.shopName}
                        </h1>
                        <div>
                          <div className="grid grid-cols-12">
                            <div className="col-span-2">
                              <span className="flex items-center ml-3 mt-4">
                                {" "}
                                <img
                                  className=""
                                  src={product.productsImage}
                                  width={100}
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="col-span-8">
                              <h1 className="text-center -ml-[200px] my-4 font-medium tracking-wider">
                                {product.productsName}
                              </h1>
                              <div className=" flex justify-around my-4">
                                <h1>
                                  Status:{" "}
                                  <span className="font-medium ">
                                    {product.ProductStatus}
                                  </span>
                                </h1>
                                <h1>
                                  Quantity:{" "}
                                  <span className="font-medium ">
                                    {product.productsQuantity}
                                  </span>
                                </h1>
                              </div>
                            </div>
                            <div className="col-span-2 my-4">
                              <h1 className="font-semibold  text-end mr-14">
                                Total: $
                                <span className="font-semibold  text-xl">
                                  {product.productPrice}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              {/* Forth Div */}
              <div className="bg-[#f7f7f7] rounded-lg my-3">
                <div>
                  <h1 className="pt-[13px] pl-[23px] font-medium">
                    Total Summary
                  </h1>
                </div>
                <div className="">
                  <div className="flex justify-between mx-4 my-2">
                    <h1 className="font-normal">Sub total</h1>
                    <h1 className="mr-14 font-bold    ">
                      $<span className="text-lg">{orderdetail.subtotal}</span>
                    </h1>
                  </div>
                  <div className="flex justify-between mx-4 my-2">
                    <h1 className="font-normal">Delivary Charge</h1>
                    <h1 className="mr-14 font-bold">
                      $
                      <span className=" text-lg">
                        {orderdetail.deliveryCharge}
                      </span>
                    </h1>
                  </div>
                  <hr />
                  <div className="flex justify-between mx-4 my-2">
                    <h1 className="font-medium">Total</h1>
                    <h1 className="mr-14 font-bold">
                      $<span className=" text-lg">{orderdetail.total}</span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Forth Div */}
            </>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OrderDetails;
