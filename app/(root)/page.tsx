import LocationEllipsis from "@/components/location-ellipsis";
import NearByFoodSeach from "@/components/nearby-food-search";
import NearbyRestuarantCarousel from "@/components/nearby-restuarant-discount-carousel";
import PopularCategories from "@/components/popular-categories";
import PopularRestaurants from "@/components/popular-restuarants";
import DownloadOrderBanner from "@/components/download-order-banner";

import RiderSignup from "@/components/rider-signup";
import BusinessSignup from "@/components/business-signup";
import KnowMore from "@/components/know-more";
import OrderProcess from "@/components/order-process";
import CompanyStatistics from "@/components/company-statistics";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>

      <Header />
      <main className="flex flex-col gap-[40px]">
        <NearByFoodSeach />
        <NearbyRestuarantCarousel />
        <PopularCategories />
        <PopularRestaurants />
        <DownloadOrderBanner />
        <BusinessSignup />
        <RiderSignup />
        <KnowMore/>
        <OrderProcess/>
        <CompanyStatistics />
      </main>
      <Footer />
    </>
  );
}
