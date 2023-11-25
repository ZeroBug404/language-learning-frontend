/* eslint-disable react/no-unescaped-entities */
"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login.png";
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

      //@ts-ignore
      if (res?.data?.accessToken) {
        router.push("/home");
        message.success("User logged in successfully!");
      } else {
        return message.error("Wrong credential!");
      }

      //@ts-ignore
      storeUserInfo({ accessToken: res?.data?.accessToken });
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
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#612ba7",
                fontSize: "1.2rem",
              }}
            >
              Login
            </Button>
          </Form>
        </div>
        <div>
          <p className="text-lg">
            Don't have an account!{" "}
            <Link href={"/register"}>
              <span className="text-pink-600">Register</span>
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
