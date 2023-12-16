import { RouterLink, Slash, SignInContainer } from './header.styled';

// вхід/реєстрація
export const SignIn = () => {
  return (
    <SignInContainer>
      <RouterLink to="/signin">Sign in</RouterLink>

      <Slash>/</Slash>
    </SignInContainer>
  );
};
