import { Card, Col, Row } from "antd";

const { Meta } = Card;

const Starting = () => {
  return (
    <div className="pb-28 pt-48 w-[1250px] m-auto">
      <Row justify="center" align="middle" gutter={20}>
        <Col sm={12} md={12} lg={10}>
          <div className="">
            <p className="text-lg mb-2" style={{ color: "#f24080" }}>
              Start Now!
            </p>
            <h1
              className="text-6xl text-gray-300 font-bold"
              style={{ color: "#301a52" }}
            >
              Learn a New
              <br /> Language!
            </h1>
            <br />
            <p>
              Our school is known for the high-quality education programs
              worldwide. We work with the best teachers who know how to engage
              students in the learning activities!
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Row
            gutter={10}
            // style={{
            //   gap: "1rem",
            // }}
          >
            <Col sm={24} md={12} lg={12}>
              <Card hoverable style={{ width: 270, marginBottom: "1rem" }}>
                <div className="flex justify-center items-center  gap-3">
                  <div className="px-5 py-2 bg-yellow-500 rounded-full text-white text-3xl">
                    <p className="text-white text-3xl">1</p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    An Easy Study Approach
                  </h3>
                </div>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Card hoverable style={{ width: 270, marginBottom: "1rem" }}>
                <div className="flex justify-center items-center  gap-3">
                  <div className="px-5 py-2 bg-yellow-500 rounded-full text-white text-3xl">
                    <p className="text-white text-3xl">2</p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    Free Teaching Materials
                  </h3>
                </div>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Card hoverable style={{ width: 270, marginBottom: "1rem" }}>
                <div className="flex justify-center items-center  gap-3">
                  <div className="px-5 py-2 bg-yellow-500 rounded-full text-white text-3xl">
                    <p className="text-white text-3xl">3</p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    A Free Mobile Application
                  </h3>
                </div>
              </Card>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Card hoverable style={{ width: 270, marginBottom: "1rem" }}>
                <div className="flex justify-center items-center  gap-3">
                  <div className="px-5 py-2 bg-yellow-500 rounded-full text-white text-3xl">
                    <p className="text-white text-3xl">4</p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    An Accredited School
                  </h3>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Starting;
