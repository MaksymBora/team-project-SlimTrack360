import { styled } from 'styled-components';
import { theme } from './../../../styles/theme';

// export const Overlay = styled.div`
/* position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 834px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`; */

export const Modal = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0px;
  width: 100%;
  height: ${(p) => p.$height}px;
`;

export const ModalWrap = styled.div`
  margin: 0 auto;
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  width: 320px;

  @media screen and (min-width: 834px) {
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 54px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  width: 158px;

  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);

  @media screen and (min-width: 834px) {
    top: 80px;
  }
`;

export const SettingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.color.primaryWhite};
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  width: 110px;
  height: 20px;
  transition: all 0.3s ease-in-out;
  fill: ${theme.color.primaryWhite};
  stroke: ${theme.color.primaryWhite};

  &:hover,
  &:focus {
    color: ${theme.color.primaryGreenLite};
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }

  svg {
    width: 16px;
  }
`;
