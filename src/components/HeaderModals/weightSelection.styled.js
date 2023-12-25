import { styled } from 'styled-components';
import { theme } from '../../styles/theme.js';
import { Field } from 'formik';
import { Form } from 'formik';

export const Modal = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => p.$height}px;
`;

export const ModalContainer = styled.div`
  margin: 0 auto;
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  width: 800px;

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 280px;

  /* height: auto; */
  width: 392px;
  padding: 20px 24px 40px 24px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};

  @media screen and (min-width: 1440px) {
    left: 1030px;
  }
`;

export const CloseBtn = styled.button`
  display: none;
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
  svg {
    width: 26px;
    height: 26px;
  }
  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: ${theme.color.primaryWhite};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;
export const WeightDescription = styled.p`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
`;

export const DateText = styled.p`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
export const Date = styled.p``;

export const FormWeight = styled(Form)`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 834px) {
    width: 344px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Input = styled(Field)`
  height: 36px;
  background-color: ${theme.color.primaryBlack2};
  border: 1px solid ${theme.color.primaryGreenLite};
  border-radius: 12px;
  padding: 8px 10px;
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  @media screen and (min-width: 320px) {
    margin-bottom: 12px;
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    margin-bottom: 0;
    width: 166px;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  &[type='number'],
  &[type='number']:hover,
  &[type='number']:focus {
    appearance: none;
    -moz-appearance: textfield;
  }
`;

export const ConfirmBtn = styled.button`
  color: ${theme.color.primaryBlack2};
  background-color: ${theme.color.primaryGreenLite};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  height: 36px;
  border: none;
  border-radius: 12px;
  &:focus {
    font-weight: 700;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;

export const CancelBtn = styled.button`
  color: ${theme.color.primaryGrey};
  background-color: transparent;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  height: 36px;
  border: none;
  border-radius: 12px;
  &:hover {
    font-weight: medium;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 834px) {
    display: none;
  }
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

  @media screen and (min-width: 834px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`;
