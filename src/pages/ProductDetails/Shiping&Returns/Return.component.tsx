import React from "react";

const Return = (props: any) => {
  const { returnPolicy } = props;
  return (
    <div className="my-3 bg-white px-3 pt-5 pb-6">
      <p className="text-xl">{returnPolicy}</p>
    </div>
  );
};

export default Return;
