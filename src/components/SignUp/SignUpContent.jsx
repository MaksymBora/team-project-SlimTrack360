import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import {
  Div,
  Form,
  Input,
  MainText,
  Subtitle,
  Wrapper,
  Button,
  Subsection,
  SignInLink,
  Options,
  Main,
  Label,
  Attention,
} from './SignUpContent.styled';

const onSubmit = async (values, actions) => {
  console.log('submitted');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const SignUpContent = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <>
      <Div>
        <MainText>Sign up</MainText>
        <Subtitle>You need to register to use the service</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Wrapper>
            <Label className={errors.name && touched.name ? 'input-error' : ''}>
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                placeholder="Name"
              />
            </Label>
            {errors.name && touched.name && (
              <Attention>{errors.name}</Attention>
            )}
            <Label
              className={errors.email && touched.email ? 'input-error' : ''}
            >
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                placeholder="E-mail"
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z"
                    fill="#E74A3B"
                  />
                </svg>
              )}
            </Label>
            {errors.password && touched.password && (
              <Attention>{errors.password}</Attention>
            )}
          </Wrapper>
          <Main>
            <Button type="submit" disabled={isSubmitting}>
              Next
            </Button>
          </Main>
        </Form>
        <Options>
          <Subsection>Do you already have an account?</Subsection>
          <SignInLink>Sign in</SignInLink>
        </Options>
      </Div>
    </>
  );
};
