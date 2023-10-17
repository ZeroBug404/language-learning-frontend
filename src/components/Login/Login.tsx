"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../app/assets/login.png";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const loginData = {
        email: data.email,
        password: data.password,
      };

      const res = await userLogin(loginData);
      console.log(res);

      message.success("User logged in successfully!");
      if (res?.data?.accessToken) {
        router.push("/home");
        message.success("User logged in successfully!");
      }
      storeUserInfo({ accessToken: res?.data?.accessToke });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
