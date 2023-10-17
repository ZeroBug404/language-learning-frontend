"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useAddCategoryMutation } from "@/redux/api/categoryApi";
import { studentSchema } from "@/schemas/student";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
};

const CreateCategory = () => {
  const [addCategory] = useAddCategoryMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {

      const registerData = {
        title: data?.title,
      };

      const res = await addCategory(registerData);
      console.log(res);

      //@ts-ignore
      if (res?.success) {
        message.success("Category created successfully!");
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
          Create Category
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(studentSchema)}>
            <div>
              <FormInput name="title" type="text" size="large" label="Title" />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#1677ff",
              }}
            >
              Create
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default CreateCategory;
