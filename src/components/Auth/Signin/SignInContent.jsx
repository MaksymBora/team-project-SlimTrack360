import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  Div,
  Form,
  Input,
  MainText,
  Subtitle,
  Wrapper,
  Label,
  Main,
  Button,
  Subsection,
  Attention,
  Span,
} from '../Signup/SignUpContent.styled';
import { Options } from './SignInContent.styled';
import { LinkSignup, Paragraph } from './SignInContent.styled';
import { basicSchema } from '../SignUp/schemas';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../Redux/userAuth/operations';
export const SignInContent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(data));
  };

  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Div>
        <MainText>Sign in</MainText>
        <Subtitle>You need to login to use the service</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <Label
              className={errors.email && touched.email ? 'input-error' : ''}
            >
              <Input
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
            </Label>
            {errors.email && touched.email && (
              <Attention>{errors.email}</Attention>
            )}
            <Label
              className={
                errors.password && touched.password ? 'input-error' : ''
              }
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                autoComplete="false"
              />
              <Span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M0.666504 7.99996C0.666504 7.99996 3.33317 2.66663 7.99984 2.66663C12.6665 2.66663 15.3332 7.99996 15.3332 7.99996C15.3332 7.99996 12.6665 13.3333 7.99984 13.3333C3.33317 13.3333 0.666504 7.99996 0.666504 7.99996Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_283_2250)">
                      <path
                        d="M11.9601 11.96C10.8205 12.8286 9.43282 13.3099 8.00008 13.3333C3.33342 13.3333 0.666748 7.99998 0.666748 7.99998C1.49601 6.45457 2.64617 5.10438 4.04008 4.03998M6.60008 2.82664C7.05897 2.71923 7.52879 2.66554 8.00008 2.66664C12.6667 2.66664 15.3334 7.99998 15.3334 7.99998C14.9287 8.75705 14.4461 9.4698 13.8934 10.1266M9.41342 9.41331C9.23032 9.60981 9.00952 9.76741 8.76418 9.87672C8.51885 9.98604 8.25402 10.0448 7.98548 10.0496C7.71693 10.0543 7.45019 10.0049 7.20116 9.9043C6.95212 9.80371 6.7259 9.65399 6.53598 9.46408C6.34606 9.27416 6.19634 9.04794 6.09575 8.7989C5.99517 8.54987 5.94577 8.28312 5.9505 8.01458C5.95524 7.74604 6.01402 7.48121 6.12333 7.23587C6.23264 6.99054 6.39025 6.76974 6.58675 6.58664"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.666748 0.666626L15.3334 15.3333"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_283_2250">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </Span>
            </Label>
            {errors.password && touched.password && (
              <Attention>{errors.password}</Attention>
            )}
          </Wrapper>
          <Main>
            <Button type="submit">Sign in</Button>
          </Main>
          <Link to="/forgot-password">
            <Paragraph>Forgot your password?</Paragraph>
          </Link>
        </Form>
        <Options>
          <Subsection>If you do not have an account yet</Subsection>
          <LinkSignup>
            <Link to="/signup">Sign up</Link>
          </LinkSignup>
        </Options>
      </Div>
    </>
  );
};
