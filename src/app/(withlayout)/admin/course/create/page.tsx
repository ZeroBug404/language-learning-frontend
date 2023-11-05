"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import { levelOptions } from "@/constants/global";
import { useAddCourseMutation } from "@/redux/api/courseApi";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  title: String;
  description: String;
  totalWeek: String;
  level: String;
  quizzes: String;
  learningOutcomes: String;
  certification: String;
  languageId: String;
  instructorId: String;
};

const CreateCourse = () => {
  const [addCourse] = useAddCourseMutation();

  const onCourseSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const courseData = {
        title: "Sample Course",
        description: "This is a sample course description.",
        totalWeek: "10",
        level: "Intermediate",
        quizzes: "10",
        learningOutcomes: "Upon completion, you will learn...",
        certification: "Certified",
        languageId: "e1524fc2-f41e-45c1-b236-2e1663765d8c",
        instructorId: "720b75c0-d3c2-4762-b9e3-3711b6450a47",
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
      {/* <div>
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
              Create
            </Button>
          </Form>
        </div> */}
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
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="title" size="large" label="Title" />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="level"
                label="Level"
                options={levelOptions}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="totalWeek"
                type="text"
                size="large"
                label="Total Week"
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormTextArea name="description" label="Description" rows={4} />
            </Col>

            {/* <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                type="password"
                name="password"
                label="Password"
                size="large"
              />
            </Col> */}

            {/* <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.gender"
                label="Gender"
                options={genderOptions}
              />
            </Col> */}

            {/* <Col span={8} style={{ margin: "10px 0" }}>
              <ACFacultyField
                name="faculty.academicFaculty"
                label="Academic Faculty"
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <ACDepartmentField
                name="faculty.academicDepartment"
                label="Academic Department"
              />
            </Col> */}

            {/* <Col span={8} style={{ margin: "10px 0" }}>
              <UploadImage name="file" />
            </Col> */}
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
              <FormInput
                name="quize"
                label="Quizzes"
                size="large"
              />
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

            {/* <Col span={8} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="faculty.dateOfBirth"
                label="Date of birth"
              />
            </Col> */}

            {/* <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.bloodGroup"
                label="Blood group"
                options={bloodGroupOptions}
              />
            </Col> */}

            {/* <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col> */}

            {/* <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col> */}
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
