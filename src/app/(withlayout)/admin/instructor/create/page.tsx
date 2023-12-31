"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { USER_ROLE } from "@/constants/role";
import { useCreateInstructorMutation } from "@/redux/api/instructorApi";
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

const CreateInstructor = () => {
  const [createInstructor] = useCreateInstructorMutation();

  const onInstructorSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const instructorData = {
        name: data.name,
        email: data.email,
        contactNo: data.contactNo,
        profileImage: "",
      };

      const res: any = await createInstructor(instructorData);
      
      //@ts-ignore
      if (res?.data?.success) {
        message.success("Instructor created successfully!");
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
        Create Instructor
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
      <Form submitHandler={onInstructorSubmit}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Instructor information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="name" size="large" label="Full Name" />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput name="email" type="email" size="large" label="Email" />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FormInput
                name="contactNo"
                type="text"
                size="large"
                label="Contact No"
              />
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
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
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

export default CreateInstructor;
