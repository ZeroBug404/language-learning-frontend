// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ServicesCarousel.module.css";

// import required modules
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import slide_1 from "../../app/assets/banner1.jpg";

import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { ClockCircleOutlined, CommentOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useAppSelector } from "@/redux/hooks";

const ServicesCarousel = () => {
  const { data: courseData } = useGetAllCourseQuery([]);

  // console.log(courseData);

  // const category = useAppSelector((state) => console.log(state.course));

  // console.log(category);
  
  // const courseBasedOnCategory = courseData?.data?.filter((item: any) => item.language.title === category);

  // console.log(courseBasedOnCategory);

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
        {courseData?.data?.map((course: any) => (
          <SwiperSlide className="" key={course.id}>
            <div className="relative">
              <Image src={slide_1} width={500} alt="slide 1" />
              <div className="absolute top-3 right-3 bg-pink-600 px-2 py-5 rounded-full">
                <h2 className="text-white font-bold text-2xl">
                  ${course.price}
                </h2>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="p-6 mt-8">
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {course.title}
                </h4>
                <p className="leading-0">{course.learningOutcomes}</p>
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
                  {course.totalWeek}
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
        ))}
      </Swiper>
    </>
  );
};

export default ServicesCarousel;
