import * as yup from "yup";

export const studentSchema = yup.object().shape({
    name: yup.string().email().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(32).required(),
    contactNo: yup.string().required("Contact no is required"),
    address: yup.string().required("Address is required"),
});
