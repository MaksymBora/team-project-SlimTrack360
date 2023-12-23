import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../styles/index';

export const DiaryWrap = styled.div`
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 834px) {
    width: 558px;
    margin: 0;
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
  line-height: 24px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  margin-bottom: 20px;
`;
