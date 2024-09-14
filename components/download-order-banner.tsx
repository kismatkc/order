import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const DownloadOrderBanner = () => {
  return (
    <section className="w-full">
      <Card className="bg-grey-1">
        <CardContent className="aspect-square flex justify-center items-center pt-16 h-full gap-y-5 flex-col">
          <div className="flex flex-col w-full items-center gap-y-5 justify-center ">
            <div className="flex gap-0">
               <Image
              alt="Order"
              src="/home/logo.svg"
              width={110}
              height={27}
                 className="w-[110px] h-[27px]"
              priority
                  />
            <span className="font-semibold text-2xl">ing&nbsp;</span>
           
                 <h1 className="font-semibold text-2xl">is more</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="flex">
                <h1 className="font-medium text-orange-600 underline text-2xl ">Personalized&nbsp;</h1>
                <h1 className="font-medium text-2xl ">&amp;&nbsp;Instant</h1>
                
              
              </div>
                   <p className="font-normal">Download the order.uk app for faster ordering</p>
            </div>
        
           
         
          </div>
          <div className="flex gap-1 items-center justify-center w-full">
            <Image src="/home/appstore.webp" width={142} height ={42} className="w-[142px] h-[42px]" alt="appstore logo"/>
    <Image src="/home/playstore.webp" className="w-[142px] h-[42px]" width={142} height ={42} alt="playstore logo"/>
    
          </div>
          
        
       <div className="w-full relative grow  ">
             <Image src="/home/friends-laughing-using-mobiles.png" fill alt="friends-laughing using mobiles" className="object-contain self-end"/>
       </div>
          
          

          </CardContent>
      </Card>
    </section>
  );
};

export default DownloadOrderBanner;
