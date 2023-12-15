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
