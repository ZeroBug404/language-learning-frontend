"use client";

import { USER_ROLE } from "@/constants/role";
import { useUserSignupMutation } from "@/redux/api/authApi";
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
  firstName: string;
  lastName: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
};

const RegisterPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const registerData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        role: USER_ROLE.STUDENT,
        contactNo: data.contactNo,
        profileImg: "",
      };

      const res = await userSignup(registerData);

      //@ts-ignore
      if (res?.data?.success) {
        router.push("/login");
        message.success("User registered successfully!");
        message.success("Please login to continue!");
      } else {
        message.error("Something went wrong!");
      }
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
          Register!
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </div>
            <div>
              <FormInput
                name="lastName"
                type="text"
                size="large"
                label="Last Name"
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
              />
            </div>
            <div>
              <FormInput
                name="contactNo"
                type="text"
                size="large"
                label="Contact No"
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
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#612ba7",
                fontSize: "1.2rem",
              }}
            >
              Register
            </Button>
          </Form>
        </div>
        <div>
          <p className="text-lg">
            Already have an account!{" "}
            <Link href={"/login"}>
              <span className="text-pink-600">Login</span>
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
