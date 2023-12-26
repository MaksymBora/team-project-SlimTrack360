import { styled } from 'styled-components';
import { theme } from './../../../styles/theme';

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalWrap = styled.div`
  margin: 0 auto;
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 300px;
  top: 0;
  left: 0;
  /* position: relative; */
  /* top: 42px; */
  /* left: 100%; */
  /* transform: translateX(-48%); */
  height: auto;
  box-shadow: ${(p) =>
    p.$isBoxShadow ? '0 4px 14px 0 rgba(227, 255, 168, 0.2)' : 'none'};
  background-color: ${theme.color.primaryBlack};
  border-radius: 12px;
  padding: 24px 0 24px 24px;
  z-index: 1000;
`;

export const CloseBtn = styled.button`
  background: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 16px;
  top: 16px;
  fill: ${theme.color.primaryGrey};
  stroke: ${theme.color.primaryGrey};

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    fill: ${theme.color.primaryWhite};
    stroke: ${theme.color.primaryWhite};
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const OptionBlock = styled.div`
  background-color: inherit;
  border: none;

  display: flex;
`;

export const IconBlock = styled.div`
  img {
    width: 49px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #5f5e5c;
  }
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`;
export const Goal = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
export const GoalIcon = styled.button`
  border: none;
  background-color: transparent;
  svg {
    width: 14px;
    height: 14px;
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }
`;
export const Kg = styled.span`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`;
export const InfoBlockText = styled.div`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  display: flex;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`;
