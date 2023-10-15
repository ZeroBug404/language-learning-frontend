import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import banner1 from "../../app/assets/banner1.jpg";
import banner2 from "../../app/assets/banner2.jpg";
import banner3 from "../../app/assets/banner3.jpg";

const contentStyle: React.CSSProperties = {
  height: "90vh",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
};

const BannerCarousel = () => (
  <Carousel autoplay>
    <div>
      <div style={{ width: "100%", height: "90vh" }}>
        <Image
          src={banner1}
          layout="fill" // Make the image take up 100% of its container
          objectFit="cover" // Scale and crop the image to fit the container
          alt="Banner 1"
        />
      </div>
    </div>
    <div>
      <div style={{ width: "100%", height: "90vh" }}>
        <Image
          src={banner2}
          layout="fill" // Make the image take up 100% of its container
          objectFit="cover" // Scale and crop the image to fit the container
          alt="Banner 1"
        />
      </div>
    </div>
  </Carousel>
);

export default BannerCarousel;
