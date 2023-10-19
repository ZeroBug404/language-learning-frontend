"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { USER_ROLE } from "@/constants/role";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { studentSchema } from "@/schemas/student";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  name: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
};

const CreateAdmin = () => {
  const [userSignup] = useUserSignupMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const registerData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: USER_ROLE.ADMIN,
        contactNo: data.contactNo,
        address: data.address,
        profileImg: "",
      };

      const res = await userSignup(registerData);

      //@ts-ignore
      if (res?.success) {
        message.success("User logged in successfully!");
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
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Create Admin
        </h1>
        <div>
          <Form submitHandler={onSubmit} >
            <div>
              <FormInput
                name="name"
                type="text"
                size="large"
                label="User Name"
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
            <div>
              <FormInput
                name="address"
                type="text"
                size="large"
                label="Address"
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
                backgroundColor: "#1677ff",
              }}
            >
              Register
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
