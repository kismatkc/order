import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const OrderProcess = () => {
  return (
    <section className="p-3">
      <div className="bg-blue-dark rounded-xl flex flex-col gap-y-8 justify-center items-center pt-16">
        <Card>
          <CardContent className="bg-grey-1 flex flex-col gap-y-2 className  items-center justify-center">
            <span className="font-bold text-lg">Place an Order!</span>
            <figure className="flex flex-col gap-y-2">
              <Image
                src="/home/order-food.png"
                alt="order food icon"
                width={128}
                height={128}
                className="w-[128px] h-[128px]"
              />
              <figcaption className="font-semibold text-sm">
                Place order through our <br /> website or Mobile app.
              </figcaption>
            </figure>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="bg-grey-1 flex flex-col gap-y-2 className  items-center justify-center">
            <span className="font-bold text-lg">Track Progress</span>
            <figure className="flex flex-col gap-y-2">
              <Image
                src="/home/burger-drink.png"
                alt="order food icon"
                width={128}
                height={128}
                className="w-[128px] h-[128px]"
              />
              <figcaption className="font-semibold text-sm">
                track your order status
                <br /> with delivery time.
              </figcaption>
            </figure>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="bg-grey-1 flex flex-col gap-y-2 className  items-center justify-center">
            <span className="font-bold text-lg">Get your Order!</span>
            <figure className="flex flex-col gap-y-2">
              <Image
                src="/home/order-done.png"
                alt="order food icon"
                width={128}
                height={128}
                className="w-[128px] h-[128px]"
              />
              <figcaption className="font-semibold text-sm">
                Receive your order at a <br /> lighting fast speed!
              </figcaption>
            </figure>
          </CardContent>
        </Card>
        <p className="text-white text-center px-5">
          Order.UK simplifies the food ordering process. Browse through our
          diverse menu, select your favorite dishes, and proceed to checkout.
          Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </div>
    </section>
  );
};

export default OrderProcess;
