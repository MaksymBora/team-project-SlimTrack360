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
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../Redux/userAuth/operations';
import { basicSchema } from '../Auth/Signup/schemas';

export const ForgotPassContent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      email: form.elements.email.value,
    };
    dispatch(forgotPassword(data));
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
