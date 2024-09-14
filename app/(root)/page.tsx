import LocationEllipsis from "@/components/location-ellipsis";
import NearByFoodSeach from "@/components/nearby-food-search";
import NearbyRestuarantCarousel from "@/components/nearby-restuarant-discount-carousel";
import PopularCategories from "@/components/popular-categories";
import PopularRestaurants from "@/components/popular-restuarants";
import DownloadOrderBanner from "@/components/download-order-banner";
import { ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between w-full h-full">
          <div className="pb-6">
            <Image
              alt="Order"
              src="/home/logo.svg"
              width={154}
              height={38}
              priority
              className="ml-4 mt-7 w-[154px] h-[38px] "
            />
          </div>
          <div className="pl-7 border-black border-l-2 border-dashed border-opacity-25">
            <Image
              alt="Menu"
              src="/home/menu.svg"
              width={65}
              height={65}
              priority
              className="mr-5 mt-3 w-[65px] h-[65px] cursor-pointer "
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center p-4 justify-center w-1/2  border-[#000000] border border-l-0">
            <figure className="flex gap-x-2  items-center justify-center">
              <Image
                alt="Menu"
                src="/home/demo-avatar.png"
                width={44}
                height={44}
                priority
                className="ml-7 mt-4 w-[44px] h-[44px]"
              />
              <figcaption className="flex flex-col gap-x-2 text-xs">
                <span className="">Kismat</span>
                <Link href="/" className="border-[#000000] border-b">
                  My profile
                </Link>
              </figcaption>
            </figure>
          </div>
          <div className="w-1/2 flex  p-2 justify-center border-[#000000] border items-center  border-r-0">
            <figure className="flex justify-center items-center gap-2">
              <ShoppingBasketIcon
                width={30}
                height={30}
                className="w-[30px] h-[30px] "
              />

              <figcaption className="text-sm">
                <span>GBP</span>
                <span>79.89</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <LocationEllipsis location="The iPhone 16 Pro is indeed priced lower than the iPhone 15 Pro in India, which might seem surprising since the iPhone 16 is the newer model. Here’s why" />
      </header>
      <main className="flex flex-col gap-[40px]">
        <NearByFoodSeach />
        <NearbyRestuarantCarousel />
        <PopularCategories />
        <PopularRestaurants />
        <DownloadOrderBanner />
      </main>
      <footer></footer>
    </>
  );
}
