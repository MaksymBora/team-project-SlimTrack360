import styled from 'styled-components';
import { theme } from '../../../styles/index';

export const WaterTitle = styled.h2`
  color: ${theme.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const WaterInfoCard = styled.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`;

export const Level = styled.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${theme.color.primaryBlack};
  padding: 7px;
`;

export const Percentage = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({ $offset }) => $offset}px);
  color: ${({ $changedColor }) => $changedColor};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

export const Bar = styled.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${theme.color.primaryViolet};
    animation: ${theme.transition.main} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`;

export const InfoWrap = styled.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`;

export const InfoTitle = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ValueWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`;

export const InfoNumber = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`;

export const Span = styled.span`
  color: ${theme.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;

export const LeftInfo = styled.p`
  color: ${theme.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const LeftNumber = styled.span`
  color: ${theme.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  // column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 8px 10px;
  background-color: ${theme.color.primaryGreenLite};
  color: ${theme.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  transition: ${theme.transition.main};
  cursor: pointer;
  &:hover {
    fill: ${theme.color.primaryWhite};
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${theme.color.primaryWhite};
    border: 1px solid ${theme.color.primaryGreenLite};
  }
  &:focus {
    fill: ${theme.color.primaryBlack};
    background-color: ${theme.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${theme.color.primaryBlack};
  }
`;

export const ButtonTrash = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: transparent;
  transition: ${theme.transition.main};
  &:hover {
    transform: scale(1.2);
    animation: 1s ease-in-out infinite;
    fill: ${theme.color.primaryWhite};
  }
  &:focus {
    fill: ${theme.color.primaryLiteGreen};
  }
  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;
