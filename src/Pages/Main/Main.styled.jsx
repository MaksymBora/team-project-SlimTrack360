import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../../styles/index';

export const Container = styled.section`
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${theme.color.primaryBlack};
  color: ${theme.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const MainTitle = styled.h1`
  color: ${theme.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const GoalLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TextLink = styled.span`
  margin-right: 6px;
`;

export const BlocksWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`;
