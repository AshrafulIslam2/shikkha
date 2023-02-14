import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer.component";
import Navigation from "../Shared/Navigation.component";
import "./payment.css";

type PaymentData = {
  paymentType: string;
};

const Payment = () => {
  const paymentimage = [
    {
      image: "https://i.ibb.co/N25CCkg/upai.png",
      name: "upai",
    },
    { image: "https://i.ibb.co/2kC2JrW/ucb.jpg", name: "ucb" },
    { image: "https://i.ibb.co/qWjb70y/Ssl.png", name: "SSL" },
    { image: "https://i.ibb.co/wy9HgX0/nagad.png", name: "nagad" },
    { image: "https://i.ibb.co/ZxC4dYN/cod.webp", name: "cod" },
    { image: "https://i.ibb.co/802mwLY/bksh.png", name: "bkash" },
  ];
  const { register, handleSubmit } = useForm<PaymentData>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="ml-10 mt-10 mx-auto">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-4"
          >
            {/* // form Div Strat */}
            <div className="w-[600px] h-10  relative top-10">
              <div className="main container grid grid-cols-3">
                {paymentimage?.map((image) => (
                  <div key={image.name} className="radio-buttons">
                    <label className="cutom-radio-btn">
                      <input
                        type="radio"
                        value={image?.name}
                        {...register("paymentType", {
                          required: "please enter name",
                          maxLength: 20,
                        })}
                      />
                      <span className="radio-btn">
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
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="paymentimg">
                          <img src={image.image} alt="" />
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* // form Div End */}

            {/* Price Div Start */}
            <div className="w-[600px]  bg-[#f7f7f7] rounded-[10px] sm:mt-28 md:mt-28 lg:mt-0">
              {/* //Order Div Strat */}
              <div>
                <div>
                  <h1 className="text-2xl font-bold tracking-[2px] mx-3 my-4">
                    Order Total
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-x-10 text-xl font-sans font-semibold my-3 mx-4">
                  <h1>Products</h1>
                  <h1>Price</h1>
                </div>
                <hr />
                {/* products names and price div */}
                <div className="grid grid-cols-2 gap-x-10 my-3 mx-4">
                  <h1>1.Youth The Child Bluetooth Headphones</h1>
                  <h1>$15</h1>
                </div>
                <hr />
                {/* products names and price div */}
                {/* sub total  and price div */}
                <div className="grid grid-cols-2 gap-x-10 text-xl font-sans font-semibold my-3 mx-4">
                  <h1>Sub Total</h1>
                  <h1>$15</h1>
                </div>
                <hr />
                {/* sub total  and price div */}
                {/* Shipping total  and price div */}
                <div className="grid grid-cols-2 gap-x-10 text-xl font-sans font-semibold my-3 mx-4">
                  <h1>(+) Shipping charge (Est. price, inside Dhaka)</h1>
                  <h1>$0</h1>
                </div>
                <hr />
                {/* Shipping total  and price div */}
                {/* Coupon  div */}
                <div className="grid grid-cols-2 gap-x-10 text-xl font-sans font-semibold my-3 mx-4">
                  <h1>Apply Coupon</h1>
                  <input className="border-2 w-20"></input>
                </div>
                <hr />
                {/* Coupon div */}
                {/* Total div  and price*/}
                <div className="grid grid-cols-2 gap-x-10 text-xl font-sans font-semibold my-3 mx-4">
                  <h1>Total</h1>
                  <h1>$15.00</h1>
                </div>
                <hr />
                {/* Total div  and price */}
                <div className="flex flex-grow my-3">
                  <input type="checkbox" className="mr-4 ml-3"></input>
                  <h1 className="text-xs">
                    I agree to the Terms and Conditions
                  </h1>
                </div>
                {/* Total div  and price */}
              </div>
              {/* //Order Div End */}
              <div className="flex justify-center">
                <Link to="/orderDetails">
                  <input
                    className=" border-2 w-52 bg-[#FFA300] text-white font-semibold py-2 my-4 rounded-[10px] cursor-pointer"
                    type="submit"
                    value="Confirm Order"
                  />
                </Link>
              </div>
            </div>
            {/* Price Div Start */}
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Payment;
