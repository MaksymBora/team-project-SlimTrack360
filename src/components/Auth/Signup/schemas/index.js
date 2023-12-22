/* eslint-disable no-useless-escape */
import * as yup from 'yup';
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const basicSchema = yup.object().shape({
  name: yup.string().required('Name is required*'),
  email: yup
    .string()
    .matches(emailRegexp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: yup
    .string()
    .required('Password is required*')
    .min(8, 'Must be at least 8 characters long*')
    .max(64, 'Must not exceed 64 characters*')
    .matches(passwordRegExp, 'Password must meet the requirements*'),
});
