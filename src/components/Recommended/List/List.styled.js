import { theme } from '../../../styles/theme';
import styled from 'styled-components';

export const FoodList = styled.ul`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 676px;
  }
`;

export const Item = styled.li`
  background-color: ${theme.color.primaryBlack2};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`;
