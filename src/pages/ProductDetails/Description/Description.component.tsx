import React from "react";

const Description: any = (props: any) => {
  const { description } = props;
  return (
    <div className="my-3 bg-white px-3 pt-5 pb-6">
      <h2 className="text-4xl">Youth The Child Bluetooth Headphones</h2>
      <ul className="list-disc mt-2 leading-loose px-5">
        {description?.map((des: any) => (
          <li key={des}>{des}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
