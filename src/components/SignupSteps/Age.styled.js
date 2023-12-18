import styled from 'styled-components';
import { theme } from '../../styles/index';
import { Link } from 'react-router-dom';

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
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
    padding-top: 80px;
    width: 380px;
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
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const StyleSubtitle = styled.h2`
  color: ${theme.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const SubtitleGenderForm = styled.h3`
  color: ${theme.color.primaryWhite};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const StyleBackLink = styled(Link)`
  color: ${theme.color.primaryGrey};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42;
  display: block;
  text-align: center;
  transition: ${theme.transition.main};
  &:hover,
  &:focus {
    color: ${theme.color.primaryGreenLite};
  }
`;

export const StyleBtnColumn = styled.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const StylesForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
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

  @media screen and (min-width: 834px) {
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
  position: relative;

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

export const StylesErrorAge = styled.div`
  width: 250px;
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
`;
