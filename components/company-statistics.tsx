import React from "react";

const CompanyStatistics = () => {
  return (
    <section className="p-4">
      <div className="bg-orange-500 rounded-xl flex flex-col gap-y-6 justify-center items-center pt-16 aspect-square">
        <div className="flex flex-col gap-y-2 pb-12 border-b ">
          <span className="text-4xl text-center text-white">546+</span>
          <span className="text-2xl text-center text-white">
            Registered Riders
          </span>
        </div>

        <div className="flex flex-col gap-y-2 pb-12 border-b ">
          <span className="text-4xl text-center text-white">789,900+</span>
          <span className="text-2xl text-center text-white">
            Orders Delivered
          </span>
        </div>

        <div className="flex flex-col gap-y-2 pb-12 border-b ">
          <span className="text-4xl text-center text-white">690+</span>
          <span className="text-2xl text-center text-white">
            Restaurants Partnered
          </span>
        </div>

        <div className="flex flex-col gap-y-2 pb-12 border-b ">
          <span className="text-4xl text-center text-white">17,457+</span>
          <span className="text-2xl text-center text-white">Food items </span>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatistics;
