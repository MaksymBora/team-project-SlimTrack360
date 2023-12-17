import styled from 'styled-components';
import { theme } from '../index';

export const StylesForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const StylesRadioBtn = styled.div`
  display: flex;
  gap: 96px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StylesBtnForm = styled.button`
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${theme.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${theme.color.primaryGreenLite};
  }
`;

export const StylesLabelForm = styled.label`
  color: ${theme.color.primaryWhite};
  font-family: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-left: 8px;
  cursor: pointer;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background: ${theme.color.primaryGreenLite};
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
  }
`;

export const CustomRadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
  }
`;

export const CustomRadio = styled.span`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid ${theme.color.primaryGrey};
    display: inline-block;
    border-radius: 100%;
  }
`;

export const AgeInputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const AgeInputLabel = styled.label`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const AgeInputStiles = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  border-radius: 12px;
  color: ${theme.color.primaryWhite};
  border: 1px solid ${theme.color.primaryGreenLite};
  background: ${theme.color.primaryBlack2};
  padding: 8px 10px;
  &::placeholder {
    color: ${theme.color.primaryGrey};
  }
`;
