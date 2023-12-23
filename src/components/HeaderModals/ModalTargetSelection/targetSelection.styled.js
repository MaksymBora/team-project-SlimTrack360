import { styled } from 'styled-components';
import { theme } from '../../../styles/theme.js';

export const Modal = styled.div`
  background-color: ${theme.color.primaryBlack2};
  position: absolute;
  z-index: 1000;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 30px;
  width: 302px;
  height: 100%;

  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 834px) {
    width: 392px;
    right: 220px;
    top: 100px;
    left: 60%;
    transform: translateX(-50%);
    height: auto;
    padding-bottom: 0;
    box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
    border-radius: 12px;
  }
  @media screen and (min-width: 1440px) {
    width: 392px;
    right: 248px;
    left: 64%;
  }
`;
export const ModalWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 300px;
    padding: 24px 10px 0px 10px;
    height: auto;
  }
  @media screen and (min-width: 834px) {
    width: 392px;

    padding: 20px 84px 40px 24px;
  }
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
  @media screen and (max-width: 834px) {
    display: none;
  }
`;
export const Title = styled.h2`
  color: ${theme.color.primaryWhite};
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const ModalDescription = styled.p`
  width: 284px;
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;
export const TargetSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const TargetInput = styled.input`
  display: flex;
  position: absolute;
  opacity: 0;
  width: 25px;
  height: 25px;
  margin-bottom: 16px;
  align-items: center;
  cursor: pointer;
`;
export const TargetImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const TargetListBlock = styled.label`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const TargetImgBorder = styled.div`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.color.primaryViolet};
  border-radius: 12px;
  padding: 10px;
  /* &:focus {
    border: 2px solid #b6c3ff;
  } */
`;
// export const TargetImgText = styled.p`

// `;
export const ConfirmBtn = styled.button`
  width: 100%;
  height: 36px;

  color: ${theme.color.primaryBlack2};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  border: none;
  border-radius: 12px;
  margin-bottom: 24px;
  cursor: pointer;
  &:focus {
    font-weight: 700;
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  height: 20px;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  color: ${theme.color.primaryGrey};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43px;

  &:hover {
    font-weight: 500;
  }
  @media screen and (min-width: 834px) {
    display: none;
  }
`;
// export const Overlay = styled.div`
//   position: fixed;
//   top: 60px;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(5, 5, 5, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // opacity: 80%;
//   @media screen and (min-width: 834px) {
//     top: 100px;
//   }
//   @media screen and (min-width: 1440px) {
//     top: 103px;
//   }
// `;
