import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../styles/index';

export const DiaryWrap = styled.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  color: ${theme.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 558px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 588px;
  }
`;
