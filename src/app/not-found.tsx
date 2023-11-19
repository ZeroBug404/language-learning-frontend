import { Row } from "antd";
import Image from "next/image";
import error from "../assets/404.jpg";

const NotFoundPage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Image src={error} width={700} height={700} alt="404 Not Found" />
    </Row>
  );
};

export default NotFoundPage;
