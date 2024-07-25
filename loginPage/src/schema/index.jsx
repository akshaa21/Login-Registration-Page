import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).max(6).required("Please enter your password"),
    // Name: Yup.string().min(3).max(20).required("Please enter your name"),
    // Password: Yup.string().min(6).max(6).required("Please enter your password"),
});