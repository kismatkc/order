import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

const NearByFoodSeach = () => {
  return (
    <section className="w-full p-3">
      <Card className="bg-grey-1 ">
        <CardContent className="aspect-square flex flex-col gap-y-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <span className="font-bold text-sm">Order Restaurant food, takeaway and groceries.</span>
          <h1 className="font-bold text-3xl">Feast Your Senses , <span className="block text-orange-600">
            <pre>
             &nbsp;&nbsp;Fast and Fresh
            </pre>
            </span></h1>
      
       
          <span className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter a postcode to see what we deliver</span>
        </div>
        <div className="flex w-full relative justify-center">
        <input type="text" placeholder="e.g. M1P 1T1" className="rounded-full p-2"/>
          <div className="aspect-square bg-orange-600 flex-grow-1 rounded-full -ml-[40px] p-2">
                <ChevronRightIcon
            width={40}
            height={40}
            className="[&>path]:stroke-white"
          />
          </div>
   

        </div>
          </CardContent>
      </Card>
    </section>
  );
};

export default NearByFoodSeach;
