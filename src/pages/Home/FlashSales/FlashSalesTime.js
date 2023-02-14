import React from "react";
import Countdown from "react-countdown";

const FlashSalesTime = ({ flaashsalestime }) => {
  const Completionist = () => <span>New Sales Will Start After few hours</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + 12800000} renderer={renderer}></Countdown>
    </div>
  );
};

export default FlashSalesTime;
