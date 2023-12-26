import * as yup from 'yup';

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Name is required*'),
  email: yup
    .string()
    .matches(emailRegexp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: yup
    .string()
    .required('Password is required*')
    .matches(passwordRegExp, 'Password must meet the requirements*'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Please enter your age')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(18, 'Age must be at least 18 years old')
    .max(122, 'Age must be at most 122 years old'),
  height: yup
    .number()
    .typeError('Height must be a number')
    .required('Please enter your height')
    .positive('Height must be a positive number')
    .integer('Height must be an integer')
    .min(70, 'Height must be at least 70 cm')
    .max(251, 'Height must be at most 251 cm'),
  currentWeight: yup
    .number()
    .typeError('Weight must be a number')
    .required('Please enter your weight')
    .positive('Weight must be a positive number')
    .integer('Weight must be an integer')
    .min(10, 'Weight must be at least 10 kg')
    .max(560, 'Weight must be at most 560 kg'),
  levelActivity: yup.string().required(),
  goal: yup.string().required(),
  sex: yup.string().required('Please select your gender'),
});
