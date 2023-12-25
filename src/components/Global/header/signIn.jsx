import { RouterLink, Slash, SignInContainer } from './header.styled';

// вхід/реєстрація
export const SignIn = ({ isActive }) => {
  return (
    <SignInContainer>
      <RouterLink $isActive={isActive} to="/signin">
        Sign in
      </RouterLink>

      <Slash>/</Slash>
    </SignInContainer>
  );
};
