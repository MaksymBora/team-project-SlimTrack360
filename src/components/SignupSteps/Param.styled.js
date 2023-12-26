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
  width: 280px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
    width: 380px;
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
  cursor: pointer;
  &:hover {
    background-color: transparent;
    border: 1px solid ${theme.color.primaryGreenLite};
    color: ${theme.color.primaryWhite};
  }
  &:focus {
    cursor: pointer;
    border: 1px solid ${theme.color.primaryGreenLite};
  }
`;

export const HeightInputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const WeightInputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputLabel = styled.label`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const InputStiles = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  border-radius: 12px;
  color: ${theme.color.primaryWhite};
  border: 1px solid ${theme.color.primaryGreenLite};
  background: ${theme.color.primaryBlack2};
  padding: 8px 10px;
  outline: none;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &::placeholder {
    color: ${theme.color.primaryGrey};
  }
`;

export const StylesErrorHeight = styled.div`
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
  display: flex;
  align-items: center;
`;

export const StylesErrorWeight = styled.div`
  position: absolute;
  color: #e74a3b;
  font-size: 12px;
  line-height: 1.16;
  padding-left: 10px;
  top: calc(100% + 5px);
`;

export const StylesErrorSvg = styled.svg`
  position: absolute;
  top: -32px;
  left: 273px;
  @media screen and (min-width: 834px) {
    left: 352px;
  }

  @media screen and (min-width: 1440px) {
    left: 185px;
  }
`;
