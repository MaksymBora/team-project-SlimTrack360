import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import {
  Attention,
  Button,
  Div,
  Form,
  Input,
  Main,
  MainText,
  Subsection,
  Subtitle,
  Wrapper,
} from '../Auth/Signup/SignUpContent.styled';
import { Options, Label } from './ForgotPassContent.styled';
import { LinkSignup } from '../Auth/Signin/SignInContent.styled';
import * as yup from 'yup';

const basicSchema = yup.object().shape({
  name: yup.string().required('Name is required*'),
  email: yup
    .string()
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: yup
    .string()
    .required('Password is required*')
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must not exceed 64 characters'),
});
export const ForgotPassContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.elements.email.value,
    };
    localStorage.setItem('reg', JSON.stringify(data));
  };
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: basicSchema,
  });
  return (
    <>
      <Div>
        <MainText>Forgot your password</MainText>
        <Subtitle>
          We will send you an email with recovery instructions
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <Label
              className={errors.email && touched.email ? 'input-error' : ''}
            >
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                placeholder="E-mail"
                required
              />
            </Label>
            {errors.email && touched.email && (
              <Attention>{errors.email}</Attention>
            )}

            {errors.password && touched.password && (
              <Attention>{errors.password}</Attention>
            )}
          </Wrapper>
          <Main>
            <Button type="submit">Send</Button>
          </Main>
        </Form>
        <Options>
          <Subsection>Do you already have an account?</Subsection>
          <LinkSignup>
            <Link to="/signup">Sign in</Link>
          </LinkSignup>
        </Options>
      </Div>
    </>
  );
};
