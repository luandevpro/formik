import * as Yup from "yup";

export const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is Required"),
    password: Yup.string()
      .min(9, "Password must be at least 9")
      .max(24, "Password too long")
      .required("Password is Required"),
    topics: Yup.array()
      .min(1, "Pick at least 1 tags")
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
    gender: Yup.string().required("Gender is Required"),
    terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    checkboxGroup: Yup.array().required("At least one color is required"),
  });
