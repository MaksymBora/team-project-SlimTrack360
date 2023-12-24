import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../../styles/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${theme.color.primaryBlack};
  color: ${theme.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
    width: 100%;
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
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  align-items: center;

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
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`;

export const FoodStatistics = styled.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack};

  color: ${theme.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 780px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-evenly;
    width: 1440px;
    column-gap: 106px;
    margin-bottom: 0;
    margin: 0;
  }
`;

export const RecommendedFoodInfo = styled.div`
  padding: 16px 0;
  width: 300px;
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};

  color: ${theme.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;
