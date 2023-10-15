"use client";

import BannerCarousel from "@/components/ui/BannerCarousel";
import Navbar from "@/components/ui/Navbar";

const HomePage = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#41246D", minHeight: "90vh" }}
        className="relative"
      >
        <Navbar />
        <div className="w-full flex justify-center items-center absolute top-36 bottom-0 left-0 right-0">
          <div className="w-[90%]">
            <BannerCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
