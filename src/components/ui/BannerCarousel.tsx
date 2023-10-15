"use client";

import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import banner1 from "../../app/assets/banner1.jpg";
// import banner2 from "../../app/assets/banner2.jpg";
// import banner3 from "../../app/assets/banner3.jpg";

const contentStyle: React.CSSProperties = {
  height: "90vh",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
};

const BannerCarousel = () => (
  <Carousel autoplay>
    <div>
      <div style={{ width: "100%", height: "90vh" }} className="relative">
        <Image
          src={banner1}
          layout="fill" // Make the image take up 100% of its container
          objectFit="cover" // Scale and crop the image to fit the container
          alt="Banner 1"
        />
        <div className="absolute top-32 left-48">
          <p className="text-lg text-pink-500 mb-2">Language School</p>
          <h1 className="text-6xl text-gray-300 font-bold">
            Great Place for <br /> Education
          </h1>
          <br />
          {/* <Button type="primary" size="large">
            Primary
          </Button> */}
          <button className="bg-pink-500 px-6 py-4 text-white font-semibold">READ MORE</button>
        </div>
      </div>
    </div>
    {/* <div>
      <div style={{ width: "100%", height: "90vh" }}>
        <Image
          src={banner2}
          layout="fill" // Make the image take up 100% of its container
          objectFit="cover" // Scale and crop the image to fit the container
          alt="Banner 1"
        />
      </div>
    </div> */}
  </Carousel>
);

export default BannerCarousel;
