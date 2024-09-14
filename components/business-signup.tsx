import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BusinessSignup = () => {
  return (
    <section className="w-full h-[25vh] p-3">
      <div
        className="w-full h-[25vh] pl-3 rounded-md"
        style={{
          backgroundImage: "url(/home/chef-with-rollingpin.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col justify-between gap-y-12">
          <div className=" bg-white  p-1 self-start">
            Earn more with lower fees
          </div>
          <span className="text-2xl text-orange-500 self-start ">
            signup as a business
            <span className="block text-white">Partner with us</span>
          </span>
        </div>
        <Button className="bg-orange-500 cursor-pointer  rounded-full mt-3 px-5 ">
          Get started
        </Button>
      </div>
    </section>
  );
};

export default BusinessSignup;
