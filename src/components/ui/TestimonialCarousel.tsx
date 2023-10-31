// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Rate } from "antd";
import profile from "../../app/assets/profile.jpg";

const TestimonialCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      // navigation={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-8/12 m-auto gap-4">
          <Image
            src={profile}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
          <p className="text-center text-gray-600 text-lg">
            I have come to courses for two summers to study English. I have
            attended private classes with Marie Claire. The time has been
            invaluable, positive, fun and very educational. Marie Claire is
            creative, so I plan to return to my studies at Lingivca next summer
            if not before.
          </p>

          <div className="flex flex-col justify-center items-center  gap-1">
            <h3
              className="text-2xl font-semibold"
              style={{
                color: "#3f354d",
              }}
            >
              John Doe
            </h3>
            <p className="text-gray-500 text-sm">General English Learning</p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-8/12 m-auto gap-4">
          <Image
            src={profile}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
          <p className="text-center text-gray-600">
            I have come to courses for two summers to study English. I have
            attended private classes with Marie Claire. The time has been
            invaluable, positive, fun and very educational. Marie Claire is
            creative, so I plan to return to my studies at Lingivca next summer
            if not before.
          </p>

          <div className="flex flex-col justify-center items-center  gap-1">
            <h3
              className="text-2xl font-semibold"
              style={{
                color: "#3f354d",
              }}
            >
              John Doe
            </h3>
            <p className="text-gray-500">General English Learning</p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-8/12 m-auto gap-4">
          <Image
            src={profile}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
          <p className="text-center text-gray-600">
            I have come to courses for two summers to study English. I have
            attended private classes with Marie Claire. The time has been
            invaluable, positive, fun and very educational. Marie Claire is
            creative, so I plan to return to my studies at Lingivca next summer
            if not before.
          </p>

          <div className="flex flex-col justify-center items-center  gap-1">
            <h3
              className="text-2xl font-semibold"
              style={{
                color: "#3f354d",
              }}
            >
              John Doe
            </h3>
            <p className="text-gray-500">General English Learning</p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-8/12 m-auto gap-4">
          <Image
            src={profile}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
          <p className="text-center text-gray-600">
            I have come to courses for two summers to study English. I have
            attended private classes with Marie Claire. The time has been
            invaluable, positive, fun and very educational. Marie Claire is
            creative, so I plan to return to my studies at Lingivca next summer
            if not before.
          </p>

          <div className="flex flex-col justify-center items-center  gap-1">
            <h3
              className="text-2xl font-semibold"
              style={{
                color: "#3f354d",
              }}
            >
              John Doe
            </h3>
            <p className="text-gray-500">General English Learning</p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialCarousel;
