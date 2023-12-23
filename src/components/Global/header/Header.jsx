import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Wrapper,
  Navigation,
  SignInWrapper,
} from './header.styled.js';
import { Logo } from './Logo.jsx';
import { SignIn } from './signIn.jsx';
import { SignUp } from './signUp.jsx';
import { UserSettings } from './authentificate/UserSettings.jsx';
import { UserAvatar } from './../header/authentificate/userAvatar.jsx';
import { selectIsLoggedIn } from './../../../Redux/userAuth/selector.js';
import { useSelector } from 'react-redux';
// import {selectUser} from './../../../Redux/userAuth/selector.js'

const Header = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);

  return IsLoggedIn ? (
    <HeaderContainer>
      <Wrapper>
        <Navigation>
          <Link to={'/main'}>
            <Logo></Logo>
          </Link>

          <UserSettings></UserSettings>
        </Navigation>

        <UserAvatar></UserAvatar>
      </Wrapper>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <Wrapper>
        <Link to={'/'}>
          <Logo></Logo>
        </Link>
        <SignInWrapper>
          <SignIn></SignIn>
          <SignUp></SignUp>
        </SignInWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
