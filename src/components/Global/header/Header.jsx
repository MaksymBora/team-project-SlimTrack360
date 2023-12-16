// import React from "react";

import {
  HeaderContainer,
  Wrapper,
  Navigation,
  SignInWrapper,
} from './header.styled.jsx';
import { Logo } from './Logo.jsx';
import { SignIn } from './signIn.jsx';
import { SignUp } from './signUp.jsx';
// import {UserAuth} from './signIn.jsx'
// import { UserAvatar} from './../header/authentificate/userAvatar.jsx'
// import {UserSettings} from './authentificate/UserSettings.jsx'

const Header = () => (
  <HeaderContainer>
    <Wrapper>
      <Navigation>
        <Logo></Logo>
        <SignInWrapper>
          <SignIn></SignIn>
          <SignUp></SignUp>
        </SignInWrapper>
        {/* <UserSettings></UserSettings> */}
      </Navigation>
    </Wrapper>
  </HeaderContainer>
);

export default Header;

{
  /* <UserAuth></UserAuth> */
}
{
  /* <HeaderLogo isAuthenticated={isAuthenticated} />
        {isAuthenticated ? <UserLogo /> : <UserAuth />} */
}
