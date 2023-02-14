import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer.component";
import Navigation from "../Shared/Navigation.component";

type FormValue = {
  name: string;
  area: string;
  district: string;
  divisions: string;
  contactNumber: string;
  postalCode: string;
  deliveryNote: string;
};

const Checkout = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: any) => {
    console.log(data);
    if (data?.name && data?.contactNumber) {
      console.log(data.name);
      navigate("/payment");
    } else {
      alert("Please try again");
    }
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
            <div className="w-[600px] relative top-10">
              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold col-span-3 text-sm">Name</label>
                <input
                  className=" border-2 col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  {...register("name", {
                    required: "please enter  name",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.name && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.name?.message}
                </p>
              )}

              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold text-sm col-span-3">Phone</label>
                <input
                  className=" border-2  col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  type="number"
                  {...register("contactNumber", {
                    required: "please enter  phone number   ",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.contactNumber && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.contactNumber?.message}
                </p>
              )}
              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold text-sm col-span-3">
                  Divisions
                </label>
                <input
                  className=" border-2  col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  type="text"
                  {...register("divisions", {
                    required: "please enter  divisons name",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.divisions && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.divisions?.message}
                </p>
              )}
              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold text-sm col-span-3">District</label>
                <input
                  className=" border-2  col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  type="text"
                  {...register("district", {
                    required: "please enter  district name",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.district && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.district?.message}
                </p>
              )}
              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold text-sm col-span-3">
                  Postal Code
                </label>
                <input
                  className=" border-2  col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  type="text"
                  {...register("postalCode", {
                    required: "please enter  postal code",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.postalCode && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.postalCode?.message}
                </p>
              )}
              <div className="grid grid-cols-12 mt-3">
                <label className="font-bold col-span-3">Area</label>
                <textarea
                  className=" border-2  col-span-7 bg-[#f7f7f7] rounded-[10px]"
                  {...register("area", {
                    required: "enter your are ex: road no , flat no etc.",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.area && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[160px]"
                >
                  {errors.area?.message}
                </p>
              )}
              <div className="">
                <p className="font-light  text-sm py-3">
                  Please add note for delivery
                </p>
                <textarea
                  className=" border-2  w-full h-20 bg-[#f7f7f7] rounded-[10px]"
                  {...register("deliveryNote", {
                    required: "enter your are ex: road no , flat no etc.",
                    maxLength: 20,
                  })}
                />
              </div>
              {errors.deliveryNote && (
                <p
                  role="alert"
                  className="text-red-700 text-xs mb-3 text-start relative left-[16px]"
                >
                  {errors.deliveryNote?.message}
                </p>
              )}
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
                  <h1>1.KZ HD9 Earphones HiFi Sport Earbuds</h1>
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
                  <h1>$15</h1>
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
                <input
                  className=" border-2 w-52 bg-[#FFA300] text-white font-semibold py-2 my-4 rounded-[10px] cursor-pointer"
                  type="submit"
                  value="Place Order"
                />
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

export default Checkout;
