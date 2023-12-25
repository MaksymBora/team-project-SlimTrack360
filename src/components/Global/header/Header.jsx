import { Link, useLocation } from 'react-router-dom';
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

import { useEffect, useState } from 'react';

const Header = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const [isModalOpenGoal, setIsModalOpenGoal] = useState(false);
  const [isModalOpenWeight, setIsModalOpenWeight] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const [isSignActive, setSignActive] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (!IsLoggedIn) {
      setSignActive(location.pathname);
    }
  }, [IsLoggedIn, location.pathname]);

  const handleOpenModal = () => {
    if (isModalOpenWeight || isModalOpenMenu || isProfileModalOpen) {
      setIsModalOpenWeight(false) ||
        setIsModalOpenMenu(false) ||
        setProfileModalOpen(false);
    }
    setIsModalOpenGoal((prevState) => !prevState);
  };

  const handleOpenModalWeight = () => {
    if (isModalOpenGoal || isModalOpenMenu || isProfileModalOpen) {
      setIsModalOpenGoal(false) ||
        setIsModalOpenMenu(false) ||
        setProfileModalOpen(false);
    }
    setIsModalOpenWeight((prevState) => !prevState);
  };

  const handleOpenModalMenu = () => {
    if (isModalOpenGoal || isModalOpenWeight || isProfileModalOpen) {
      setIsModalOpenGoal(false) ||
        setIsModalOpenWeight(false) ||
        setProfileModalOpen(false);
    }

    setIsModalOpenMenu((prevState) => !prevState);
  };

  const handleOpenModalProfile = () => {
    if (
      isModalOpenMenu ||
      isModalOpenGoal ||
      isModalOpenWeight ||
      isProfileModalOpen
    ) {
      setIsModalOpenMenu(false) ||
        setIsModalOpenGoal(false) ||
        setIsModalOpenWeight(false) ||
        setIsModalOpenMenu(false);
    }
    setProfileModalOpen((prevState) => !prevState);
  };

  return IsLoggedIn ? (
    <HeaderContainer>
      <Wrapper>
        <Navigation>
          <Link to={'/main'}>
            <Logo></Logo>
          </Link>

          <UserSettings
            isModalOpenGoal={isModalOpenGoal}
            isModalOpenWeight={isModalOpenWeight}
            isModalOpenMenu={isModalOpenMenu}
            handleOpenModal={handleOpenModal}
            handleOpenModalWeight={handleOpenModalWeight}
            handleOpenModalMenu={handleOpenModalMenu}
          ></UserSettings>
        </Navigation>

        <UserAvatar
          isProfileModalOpen={isProfileModalOpen}
          handleOpenModalProfile={handleOpenModalProfile}
        ></UserAvatar>
      </Wrapper>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <Wrapper>
        <Link to={'/'}>
          <Logo></Logo>
        </Link>
        <SignInWrapper>
          <SignIn isActive={isSignActive === '/signin'}></SignIn>
          <SignUp isActive={isSignActive === '/signup'}></SignUp>
        </SignInWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
