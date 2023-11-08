"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useAddCategoryMutation } from "@/redux/api/categoryApi";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: string;
};

const CreateCategory = () => {
  const [addCategory] = useAddCategoryMutation();

  const onCategorySubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const registerData = {
        title: data?.title,
      };

      const res = await addCategory(registerData);
      console.log(res);

      //@ts-ignore
      if (res?.data?.success) {
        message.success("Category created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1
        style={{
          margin: "15px 0px",
        }}
      >
        Create Course
      </h1>
      <Form submitHandler={onCategorySubmit}>
        {/* course information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Course information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="title" size="large" label="Title" />
            </Col>
          </Row>
        </div>

        <Button size="large" htmlType="submit">
          submit
        </Button>
      </Form>
    </>
  );
};

export default CreateCategory;
