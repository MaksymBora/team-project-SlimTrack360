import { useEffect } from 'react';
import { useState } from 'react';
import {
  Div,
  Form,
  Input,
  MainText,
  Subtitle,
  Title,
  Wrapper,
  Button,
  Subsection,
  SignInLink,
  Options,
  Main,
  Attention,
} from './SignUpContent.styled';

export const SignUpContent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('Name can not be empty*');
  const [emailError, setEmailError] = useState('Email can not be empty*');
  const [passwordError, setPasswordError] = useState(
    'Password can not be empty*'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value < 2) {
      setNameError('Enter a valid name');
      if (!e.target.value) {
        setNameError('Name can not be empty*');
      }
    } else {
      setNameError('');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Enter a valid email*');
      if (!e.target.value) {
        setEmailError('Email can not be empty*');
      }
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 5) {
      setPasswordError('Enter a valid password*');
      if (!e.target.value) {
        setPasswordError('Password can not be empty*');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <>
      <Div>
        <MainText>Sign up</MainText>
        <Subtitle>You need to register to use the service</Subtitle>
        <Form>
          <Wrapper>
            <Title>
              <Input
                onChange={(e) => nameHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={name}
                name="name"
                placeholder="Name"
              />
              {nameDirty && nameError && (
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
            </Title>
            {nameDirty && nameError && <Attention>{nameError}</Attention>}
            <Title>
              <Input
                onChange={(e) => emailHandler(e)}
                value={email}
                onBlur={(e) => blurHandler(e)}
                name="email"
                placeholder="E-mail"
              />
              {emailDirty && emailError && (
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
            </Title>

            {emailDirty && emailError && <Attention>{emailError}</Attention>}
            <Title>
              <Input
                onChange={(e) => passwordHandler(e)}
                value={password}
                onBlur={(e) => blurHandler(e)}
                name="password"
                placeholder="Password"
              />
              {passwordDirty && passwordError && (
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
            </Title>
            {passwordDirty && passwordError && (
              <Attention>{passwordError}</Attention>
            )}
          </Wrapper>
          <Main>
            <Button disabled={!formValid} type="submit">
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
