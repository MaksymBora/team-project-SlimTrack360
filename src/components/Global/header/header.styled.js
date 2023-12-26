import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../styles/theme';

// контейнер
export const HeaderContainer = styled.div`
  background-color: ${theme.color.primaryBlack2};
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media screen and (min-width: 320px) {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  @media screen and (min-width: 834px) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (min-width: 320px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 320px;
  }

  @media screen and (min-width: 834px) {
    width: 800px;
    padding-right: 10px;
    padding-left: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1382px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

// лого
export const LogoBtn = styled.button`
  background-color: transparent;
`;

export const LogoText = styled.span`
  color: ${theme.color.primaryGrey};
  @media screen and (min-width: 320px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.38;
  }

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46;
  }
`;

export const SignInWrapper = styled.div`
  display: flex;
  gap: 0;
`;

//Sign in SignUp
export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RouterLink = styled(Link)`
  color: ${(p) =>
    p.$isActive ? p.theme.color.primaryGreenLite : p.theme.color.primaryWhite};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  &:focus {
    color: ${theme.color.primaryGreenLite};
  }
  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`;

export const RouterLinkSignUp = styled(Link)`
  color: ${(p) =>
    p.$isActive ? p.theme.color.primaryGreenLite : p.theme.color.primaryWhite};

  margin-right: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  &:focus {
    color: ${theme.color.primaryGreenLite};
  }

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`;

export const Slash = styled.span`
  color: ${theme.color.primaryWhite};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.43;
`;

export const UserIcon = styled.div`
  svg {
    width: 26px;
    height: 26px;
    fill: ${theme.color.primaryWhite};
    @media screen and (min-width: 834px) {
      width: 28px;
      height: 28px;
    }
  }
`;

// Автентифікований користувач

// аватар та ім'я
export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) {
    gap: 4px;
  }
  @media screen and (min-width: 834px) {
    gap: 127px;
  }
  @media screen and (min-width: 1440px) {
    gap: 626px;
  }
`;

export const UserLogoContainer = styled.div`
  display: flex;

  height: 24px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 834px) {
    height: 28px;
  }
`;

export const UserName = styled.div`
  margin-right: 6px;
  max-width: 86px;
  overflow: hidden;
  white-space: nowrap;

  p {
    color: ${theme.color.primaryWhite};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    text-overflow: clip;
  }
`;

/* Body text/1 */

export const UserAva = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;
  margin-right: 4px;
  background: ${(p) =>
    p.$isDefault ? p.theme.color.primaryGreenLite : 'transparent'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserLogoText = styled.div`
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  font-weight: 500;
  color: ${(p) => p.theme.color.primaryBlack2};

  @media screen and (min-width: 834px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const UserLogoIcon = styled.div`
  width: 14px;
  height: 14px;
`;

//Настройки юзера

export const UserMode = styled.div`
  position: relative;
`;

export const ProfileBtn = styled.button`
  border: none;
  background-color: transparent;

  padding: 0;
  margin: 0;
  height: 100%;
  svg {
    width: 14px;
    height: 14px;
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }
`;

//піктограма
export const PictogramBlock = styled.div``;
export const Pictogram = styled.button`
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.color.primaryGrey};
  }
`;

export const PictogramOpen = styled.button`
  background-color: transparent;
  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.color.primaryGreenLite};
  }
`;

//block goal
export const UserSet = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 834px) {
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px;
  }
`;

export const SelectGoals = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  position: relative;
`;

export const GoalPic = styled.div`
  width: 48px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
`;

export const GoalSelection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
`;

export const Goal = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const SettingBtn = styled.div`
  display: flex;
  gap: 12px;
  width: 113px;

  cursor: pointer;
`;

export const LoseFat = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const GoalBtn = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  width: 14px;
  padding: 0;
  margin: 0;

  svg {
    width: 14px;
    height: 14px;
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }
`;

// block Weight

export const SelectWeight = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

export const WeightPic = styled.div`
  width: 48px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;

  img {
    width: 100%;
  }
`;

export const WeightSelection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
`;

export const Weight = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const SetBtn = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`;

export const NumKg = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const Kg = styled.span`
  margin-left: 4px;
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const WeightBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }
`;
