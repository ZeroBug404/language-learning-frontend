"use client";

import BannerCarousel from "../ui/BannerCarousel";
import Blog from "./Blog";
import Services from "./Services";
import Starting from "./Starting";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#41246D", minHeight: "90vh" }}
        className="relative"
      >
        <div className="w-full flex justify-center items-center absolute top-36 bottom-0 left-0 right-0">
          <div className="w-[90%]">
            <BannerCarousel />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <Starting />
      </div>
      <div style={{ backgroundColor: "#41246D" }}>
        <Services />
      </div>
      <div style={{}}>
        <Testimonial />
      </div>
      <div style={{}}>
        <Blog />
      </div>
    </div>
  );
};

export default Home;
