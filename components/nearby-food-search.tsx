import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const NearByFoodSeach = () => {
  return (
    <section className="w-full p-3 ">
      <Card className="">
        <CardContent className="flex aspect-square items-center justify-center"></CardContent>
        <div>
          <span>Order Restaurant food, takeaway and groceries.</span>
          <h1>Feast Your Senses ,</h1>
          <br />
          <h1>Fast and Fresh</h1>
          <span>Enter a postcode to see what we deliver</span>
        </div>
        <div></div>
      </Card>
    </section>
  );
};

export default NearByFoodSeach;
