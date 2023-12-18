import styled from 'styled-components';
import { theme } from '../../styles/index';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 834px;
    align-items: center;
    padding-left: 195px;
    padding-right: 195px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 150px;
    padding-right: 150px;
    gap: 104px;
  }
`;

export const StylesSection = styled.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: stretch;
  }
`;

export const DescWrapper = styled.div`
  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;

export const StyleSubtitle = styled.h1`
  color: ${theme.color.primaryGrey};
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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
