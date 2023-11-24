"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ServicesCarousel.module.css";

// import required modules
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import slide_1 from "../../assets/banner1.jpg";

import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { RootState } from "@/redux/store";
import { ClockCircleOutlined, CommentOutlined } from "@ant-design/icons";
import { Divider, Row, Space, Spin } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const ServicesCarousel = () => {
  const { data: courseData, isLoading } = useGetAllCourseQuery([]);

  // console.log(courseData);

  const selectedCategory = useSelector(
    (state: RootState) => state.category.category
  );

  console.log(selectedCategory);

  const courseBasedOnCategory = courseData?.data?.filter(
    (item: any) => item.language.title === selectedCategory
  );

  console.log(courseBasedOnCategory);

  if (isLoading) {
    return (
      <Row justify="center" align="middle">
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

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
        {courseBasedOnCategory?.length !== 0
          ? courseBasedOnCategory?.map((course: any) => (
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
                    <Link
                      href={{
                        pathname: "/courseDetail",
                        query: { id: course.id },
                      }}
                    >
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 cursor-pointer">
                        {course.title}
                      </h4>
                    </Link>

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
            ))
          : courseData?.data?.map((course: any) => (
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
                    <Link
                      href={{
                        pathname: "/courseDetail",
                        query: { id: course.id },
                      }}
                      // as={`/courseDetail/${course.id}`}
                    >
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 cursor-pointer">
                        {course.title}
                      </h4>
                    </Link>

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
