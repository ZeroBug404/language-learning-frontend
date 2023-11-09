"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { levelOptions } from "@/constants/global";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { useAddCourseMutation } from "@/redux/api/courseApi";
import { useInstructorsQuery } from "@/redux/api/instructorApi";
import { useDebounced } from "@/redux/hooks";
import { Button, Col, Row, message } from "antd";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: String;
  description: String;
  totalWeek: String;
  level: String;
  quiz: String;
  learningOutcomes: String;
  certification: String;
  price: String;
  language: String;
  instructor: String;
};

const CreateCourse = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const [addCourse] = useAddCourseMutation();

  const { data: languageData } = useGetAllCategoryQuery({ ...query });

  const { data: instructorData } = useInstructorsQuery([]);

  const languageOptions = languageData?.data?.map((item: any) => ({
    label: item.title,
    value: item.title,
  }));

  const instructorOptions = instructorData?.data?.map((item: any) => ({
    label: item.name,
    value: item.name,
  }));

  const onCourseSubmit: SubmitHandler<FormValues> = async (data) => {
    const instructor = instructorData?.data?.filter(
      (item: any) => item.name === data.instructor
    );

    const language = languageData?.data?.filter(
      (item: any) => item.title === data.language
    );

    try {
      const courseData = {
        title: data.title,
        description: data.description,
        totalWeek: data.totalWeek,
        level: data.level,
        quizzes: data.quiz,
        learningOutcomes: data.learningOutcomes,
        certification: data.certification,
        price: data.price,
        languageId: language[0].id,
        instructorId: instructor[0].id,
      };

      const res: any = await addCourse(courseData);

      //@ts-ignore
      if (res?.data?.success) {
        message.success("Course created successfully!");
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
      <Form submitHandler={onCourseSubmit}>
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
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="title" size="large" label="Title" />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="level"
                label="Level"
                options={levelOptions}
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="totalWeek"
                type="text"
                size="large"
                label="Total Week"
              />
            </Col>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="price" type="text" size="large" label="Price" />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea name="description" label="Description" rows={4} />
            </Col>

          </Row>
        </div>
        {/* other information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Other information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="quiz" label="Quizzes" size="large" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="learningOutcomes"
                label="Learning Outcomes"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="certification"
                label="Certification"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="language"
                label="Language Category"
                options={languageOptions}
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="instructor"
                label="Instructor"
                options={instructorOptions}
              />
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

export default CreateCourse;
