import React, { useEffect } from "react";
import hexa from "../../../images/home/paymentMethods/hexa.jpeg";
import circle from "../../../images/home/paymentMethods/circle.jpeg";
import kanba from "../../../images/home/paymentMethods/kanba.jpeg";
import maven from "../../../images/home/paymentMethods/maven.jpeg";
import liva from "../../../images/home/paymentMethods/maven.jpeg";
import foxhub from "../../../images/home/paymentMethods/foxHub.jpeg";
import goldline from "../../../images/home/paymentMethods/goldLine.jpeg";
import earth from "../../../images/home/paymentMethods/earth.jpeg";
import asgardia from "../../../images/home/paymentMethods/asgardia.jpeg";

const PaymentMethods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Payment method section start */}
      <div className="bg-gray-100 px-10 py-10">
        <h1 className="text-3xl font-semibold mb-8">Payment Method</h1>
        <span className="flex justify-between items-center">
          <img className="w-1/12" src={hexa} alt="hexa" />
          <img className="w-1/12" src={circle} alt="circle" />
          <img className="w-1/12" src={kanba} alt="kanba" />
          <img className="w-1/12" src={maven} alt="maven" />
          <img className="w-1/12" src={liva} alt="liva" />
          <img className="w-1/12" src={foxhub} alt="foxhub" />
          <img className="w-1/12" src={goldline} alt="goldline" />
          <img className="w-1/12" src={earth} alt="earth" />
          <img className="w-1/12" src={asgardia} alt="asgardia" />
        </span>
      </div>
    </>
  );
};

export default PaymentMethods;
