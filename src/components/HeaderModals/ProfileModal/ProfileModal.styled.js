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
  width: 158px;
  border-radius: 12px;
  left: -20px;
  top: 60px;

  background-color: ${theme.color.primaryBlack2};
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  padding: 0;

  @media screen and (min-width: 320px) {
    top: 36px;
  }
  @media screen and (min-width: 834px) {
    left: -40px;
    top: 40px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
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

  svg {
    width: 16px;
    fill: ${theme.color.primaryWhite};
    stroke: ${theme.color.primaryWhite};
  }
`;
