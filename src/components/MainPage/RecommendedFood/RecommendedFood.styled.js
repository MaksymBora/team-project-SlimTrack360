import { theme } from '../../../styles/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageName = styled.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const FoodList = styled.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 676px;
  }
`;

export const Item = styled.li`
  background-color: ${theme.color.secondaryGrey};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`;

export const ButtonText = styled.p`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 3px;
  }
`;
