import {
  SignInContainer,
  RouterLinkSignUp,
  UserIcon,
} from './header.styled.jsx';
import icon from './../../../assets/sprite.svg';

export const SignUp = () => {
  return (
    <SignInContainer>
      <RouterLinkSignUp to="signup">Sign up</RouterLinkSignUp>

      <UserIcon>
        <svg>
          <use href={icon + '#icon-profile-circle'}></use>
        </svg>
      </UserIcon>
    </SignInContainer>
  );
};
