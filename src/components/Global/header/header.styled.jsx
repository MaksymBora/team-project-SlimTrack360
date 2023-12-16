import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

// контейнер
export const HeaderContainer = styled.header`
  padding-top: 19px;
  padding-bottom: 19px;
  background-color: #0f0f0f;
  margin: 0px auto;

  @media screen and (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 34px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 34px;
    padding-bottom: 34px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  min-width: 300px;
  max-width: 345px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 0px auto;

  @media screen and (min-width: 768px) {
    max-width: 714px;
    padding-right: 27px;
    padding-left: 27px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
    padding-right: 34px;
    padding-left: 34px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// лого
export const LogoBtn = styled.div`
  width: 102px;
`;

export const LogoText = styled.span`
  color: #b6b6b6;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
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
  color: #ffffff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  &:focus {
    color: #e3ffa8;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RouterLinkSignUp = styled(Link)`
  color: #ffffff;
  margin-right: 6px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  &:focus {
    color: #e3ffa8;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Slash = styled.span`
  color: #ffffff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.43;
`;
export const UserIcon = styled.div`
  svg {
    width: 26px;
    height: 26px;
    fill: #ffffff;
    @media screen and (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }
`;

// Автентифікований користувач

// аватар та ім'я
export const UserLogoContainer = styled.div`
  display: flex;
  width: 126px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 28px;
  }
`;

export const UserName = styled.p`
  margin-right: 6px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;

export const UserAva = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserLogoText = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 4px;
  border-radius: 50%;
  border: #0f0f0f solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserLogoIcon = styled.div`
  width: 14px;
  height: 14px;
`;

//Настройки юзера

export const UserMode = styled.div``;
//піктограма
export const Pictogram = styled.div`
  svg {
    width: 16px;
    height: 16px;
    fill: #e3ffa8;
  }
`;

//block goal
export const UserSet = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 1440px) {
    width: 350px;
    gap: 80px;
  }
`;
export const SelectGoals = styled.div`
  display: flex;
  gap: 12px;
`;
export const GoalPic = styled.div`
  img {
    width: 49px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #5f5e5c;
  }
`;

export const GoalSelection = styled.div`
  display: flex;
  flex-direction: column;
  width: 142px;
  gap: 2px;
`;
export const Goal = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const SettingBtn = styled.div`
  display: flex;
  gap: 12px;
`;
export const LoseFat = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const GoalBtn = styled.button`
  border: none;
  background-color: transparent;
  svg {
    width: 14px;
    height: 14px;
    fill: #e3ffa8;
    stroke: #e3ffa8;
  }
`;

// block Weight

export const SelectWeight = styled.div`
  display: flex;
  gap: 12px;
`;

export const WeightPic = styled.div`
  img {
    width: 49px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #5f5e5c;
  }
`;

export const WeightSelection = styled.div`
  display: flex;
  flex-direction: column;
  width: 142px;
  gap: 2px;
`;

export const Weight = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const SetBtn = styled.div`
  display: flex;
  gap: 12px;
`;

export const NumKg = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const Kg = styled.span`
  margin-left: 4px;
  color: #b6b6b6;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const WeightBtn = styled.button`
  border: none;
  background-color: transparent;
  svg {
    width: 16px;
    height: 16px;
    fill: #e3ffa8;
    stroke: #e3ffa8;
  }
`;
