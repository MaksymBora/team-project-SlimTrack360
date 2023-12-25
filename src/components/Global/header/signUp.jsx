import {
  SignInContainer,
  RouterLinkSignUp,
  UserIcon,
} from './header.styled.js';
import icon from './../../../assets/sprite.svg';

export const SignUp = ({ isActive }) => {
  return (
    <SignInContainer>
      <RouterLinkSignUp $isActive={isActive} to="signup">
        Sign up
      </RouterLinkSignUp>

      <UserIcon>
        <svg>
          <use href={icon + '#icon-profile-circle'}></use>
        </svg>
      </UserIcon>
    </SignInContainer>
  );
};
