import appointmentProfile from "@/assets/appointment.jpg";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const MakeAppointment = () => {
  return (
    <div className="flex justify-end mb-[-5rem]">
      <div className="bg-white w-[1300px] p-1 lg:p-28">
        <Row gutter={60}>
          <Col sm={4} md={10} lg={10} xl={10}>
            <Image src={appointmentProfile} width={1000} alt="" />
          </Col>
          <Col sm={16} md={14} lg={14} xl={10}>
            <div className="">
              <p className="text-xl mb-2" style={{ color: "#f24080" }}>
                Start Now!
              </p>
              <h1
                className="text-6xl text-gray-300 font-bold"
                style={{ color: "#301a52" }}
              >
                Let’s Start Your
                <br /> Education!
              </h1>
              <br />
              <p>
                We offer a brand new approach to the most basic things. The wide
                range of learning options allows our students to select the most
                convenient and effective course!
              </p>
              <Link href={"/appointment"}>
                <button className="bg-[#f24080] hover:bg-[#41246d] transition-all duration-300 text-white px-10 py-5 my-8 font-semibold">
                  MAKE AN APPOINTMENT
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MakeAppointment;
