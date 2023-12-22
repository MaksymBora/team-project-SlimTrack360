import styled from 'styled-components';
import { theme } from '../../styles/index';

export const Container = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    width: 800px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 104px;
  }
`;

export const StylesSection = styled.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 834px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`;

export const DescWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 308px;
  }
`;

export const StylePicture = styled.picture`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-bottom: 60px;
  }
`;

export const StyleTitle = styled.h1`
  color: ${theme.color.primaryWhite};
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const StyleSubtitle = styled.h2`
  color: ${theme.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  width: 298px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const StyleBackLink = styled.button`
  color: ${theme.color.primaryGrey};
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  transition: ${theme.transition.main};
  &:hover,
  &:focus {
    color: ${theme.color.primaryGreenLite};
  }
`;

export const BackLinkwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleBtnColumn = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 212px;
    align-items: stretch;
  }
`;

export const StylesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    align-items: stretch;
  }
`;

export const StylesRadioBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    width: 458px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    width: 328px;
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

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const StylesLabelForm = styled.label`
  color: ${theme.color.primaryWhite};
  font-family: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  padding-left: 18px;
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

  @media screen and (min-width: 834px) {
    display: inline-block;
    width: 100%;
  }
`;

export const CustomRadioInput = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label::after {
    opacity: 1;
    transition: ${theme.transition.main};
  }
`;

export const CustomRadio = styled.div`
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
    position: absolute;
    cursor: pointer;
  }
`;
