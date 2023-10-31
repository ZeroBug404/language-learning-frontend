// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ServicesCarousel.module.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import slide_1 from "../../app/assets/banner1.jpg";

import { ClockCircleOutlined, CommentOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const ServicesCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="relative">
            <Image src={slide_1} width={500} alt="slide 1" />
            <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
              <h2 className="text-white font-bold text-2xl">$240</h2>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 mt-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                General Chinese
              </h4>
              <p className="leading-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eius doloribus
              </p>
            </div>
            <Divider
              style={{
                margin: 0,
              }}
            />
            <div className="flex justify-center items-center py-2">
              <p className="flex gap-2">
                <span>
                  <ClockCircleOutlined
                    style={{
                      color: "#f6b417",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Week
              </p>
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "gray",
                }}
              />
              <p className="flex gap-2">
                <span
                  style={{
                    color: "#f6b417",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <CommentOutlined />
                </span>
                1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image src={slide_1} width={500} alt="slide 1" />
            <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
              <h2 className="text-white font-bold text-2xl">$240</h2>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 mt-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                General Chinese
              </h4>
              <p className="leading-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eius doloribus
              </p>
            </div>
            <Divider
              style={{
                margin: 0,
              }}
            />
            <div className="flex justify-center items-center py-2">
              <p className="flex gap-2">
                <span>
                  <ClockCircleOutlined
                    style={{
                      color: "#f6b417",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Week
              </p>
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "gray",
                }}
              />
              <p className="flex gap-2">
                <span
                  style={{
                    color: "#f6b417",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <CommentOutlined />
                </span>
                1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image src={slide_1} width={500} alt="slide 1" />
            <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
              <h2 className="text-white font-bold text-2xl">$240</h2>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 mt-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                General Chinese
              </h4>
              <p className="leading-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eius doloribus
              </p>
            </div>
            <Divider
              style={{
                margin: 0,
              }}
            />
            <div className="flex justify-center items-center py-2">
              <p className="flex gap-2">
                <span>
                  <ClockCircleOutlined
                    style={{
                      color: "#f6b417",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Week
              </p>
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "gray",
                }}
              />
              <p className="flex gap-2">
                <span
                  style={{
                    color: "#f6b417",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <CommentOutlined />
                </span>
                1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image src={slide_1} width={500} alt="slide 1" />
            <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
              <h2 className="text-white font-bold text-2xl">$240</h2>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 mt-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                General Chinese
              </h4>
              <p className="leading-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eius doloribus
              </p>
            </div>
            <Divider
              style={{
                margin: 0,
              }}
            />
            <div className="flex justify-center items-center py-2">
              <p className="flex gap-2">
                <span>
                  <ClockCircleOutlined
                    style={{
                      color: "#f6b417",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Week
              </p>
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "gray",
                }}
              />
              <p className="flex gap-2">
                <span
                  style={{
                    color: "#f6b417",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <CommentOutlined />
                </span>
                1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <Image src={slide_1} width={500} alt="slide 1" />
            <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
              <h2 className="text-white font-bold text-2xl">$240</h2>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 mt-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                General Chinese
              </h4>
              <p className="leading-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eius doloribus
              </p>
            </div>
            <Divider
              style={{
                margin: 0,
              }}
            />
            <div className="flex justify-center items-center py-2">
              <p className="flex gap-2">
                <span>
                  <ClockCircleOutlined
                    style={{
                      color: "#f6b417",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  />
                </span>
                Week
              </p>
              <Divider
                type="vertical"
                style={{
                  backgroundColor: "gray",
                }}
              />
              <p className="flex gap-2">
                <span
                  style={{
                    color: "#f6b417",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <CommentOutlined />
                </span>
                1
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServicesCarousel;
