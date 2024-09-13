import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ChevronDownCircle } from "lucide-react";
const NearbyRestuarantCarousel = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h1>Up to -40% Discount Offers 🎊</h1>
        <Button className="rounded-full gap-x-1" variant="outline">
          <ChevronDownCircle
            width={18}
            height={18}
            className="scale-105 fill-blue-dark [&>path]:stroke-white "
          />

          <span>Pizza &amp; Fast Food</span>
        </Button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default NearbyRestuarantCarousel;
