import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const RiderSignup = () => {
  return (
    <section className="w-full h-[25vh] p-3">
      <div
        className="w-full h-[25vh] rounded-md pl-3"
        style={{
          backgroundImage: "url(/home/rider-giving-thumbsup.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col justify-between gap-y-12">
          <div className=" bg-white  p-1 self-start">Avail exclusive perks</div>
          <span className="text-2xl text-orange-500 self-start ">
            signup as a rider
            <span className="block text-white">Ride with us</span>
          </span>
        </div>
        <Button className="bg-orange-500 cursor-pointer  rounded-full mt-3 px-5">
          Get started
        </Button>
      </div>
    </section>
  );
};

export default RiderSignup;
