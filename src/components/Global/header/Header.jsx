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

import { useState } from 'react';

const Header = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const [isModalOpenGoal, setIsModalOpenGoal] = useState(false);
  const [isModalOpenWeight, setIsModalOpenWeight] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

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
    if (isModalOpenGoal || isModalOpenWeight || isProfileModalOpen) {
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
          <div>
            <Link to={'/main'}>
              <Logo></Logo>
            </Link>
          </div>

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
          <SignIn></SignIn>
          <SignUp></SignUp>
        </SignInWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
