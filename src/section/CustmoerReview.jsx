import React from "react";

const CustmoerReview = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What our <span className=" text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customer about their exceptional
        experiences with us
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
    </section>
  );
};

export default CustmoerReview;
