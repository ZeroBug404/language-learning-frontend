"use client";

import { useGetSingleCourseQuery } from "@/redux/api/courseApi";
import { Col, Row } from "antd";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { MdPlayLesson, MdQuiz, MdWatchLater } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import profile from "../../assets/profile.jpg";
import TabbedInterface from "../../components/ui/TabbedInterface";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const CourseDetailPage = ({ searchParams }: Props) => {
  const { data: singleCourse } = useGetSingleCourseQuery(searchParams.id);

  console.log(singleCourse?.data);

  return (
    <Row
      style={{
        width: "1100px",
        margin: "7rem auto",
      }}
    >
      <Col span={18}>
        <Row>
          <Col span={12}>
            <div className="flex items-center gap-3">
              <Image
                src={profile}
                alt={singleCourse?.title}
                width={50}
                height={50}
                style={{ borderRadius: "100%" }}
              />
              <div>
                <h4>Instructor</h4>
                <h2 className="font-semibold text-lg">
                  {singleCourse?.data?.instructor?.name}
                </h2>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="flex gap-2 items-start">
              <FaRegBookmark
                className="text-4xl"
                style={{
                  color: "#f24080",
                }}
              />
              <div>
                <h4>Category</h4>
                <h2 className="font-semibold text-lg">
                  {singleCourse?.data?.language?.title}
                </h2>
              </div>
            </div>
          </Col>
        </Row>

        <div className="my-8">
          <h1 className="text-2xl text-[#301a52] font-semibold">
            {singleCourse?.data?.title}
          </h1>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-1">
            <MdWatchLater
              className="text-xl"
              style={{
                color: "#f24080",
              }}
            />
            <p className="text-lg">22 Weeks</p>
          </div>
          <div className="flex items-center gap-1">
            <GiNetworkBars
              className="text-xl"
              style={{
                color: "#f24080",
              }}
            />
            <p className="text-lg">All Levels</p>
          </div>
          <div className="flex items-center gap-1">
            <MdPlayLesson
              className="text-xl"
              style={{
                color: "#f24080",
              }}
            />
            <p className="text-lg">2 Lessons</p>
          </div>
          <div className="flex items-center gap-1">
            <MdQuiz
              className="text-xl"
              style={{
                color: "#f24080",
              }}
            />
            <p className="text-lg">0 Quizes</p>
          </div>
          <div className="flex items-center gap-1">
            <PiStudentFill
              className="text-xl"
              style={{
                color: "#f24080",
              }}
            />
            <p className="text-lg">1 Student</p>
          </div>
        </div>

        <TabbedInterface />
      </Col>

      <Col span={6}>col-12</Col>
    </Row>
  );
};

export default CourseDetailPage;
