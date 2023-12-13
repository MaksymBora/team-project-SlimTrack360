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
} from './SignUpContent.styled';

export const SignUpContent = () => {
  return (
    <>
      <Div>
        <MainText>Sign up</MainText>
        <Subtitle>You need to register to use the service</Subtitle>
        <Form>
          <Wrapper>
            <Title>
              <Input placeholder="Name" />
            </Title>
            <Title>
              <Input placeholder="E-mail" />
            </Title>
            <Title>
              <Input placeholder="Password" />
            </Title>
          </Wrapper>
          <Main>
            <Button>Next</Button>
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
