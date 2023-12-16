import { theme } from '../../../styles/theme';
import styled from 'styled-components';

export const FoodList = styled.ul`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 676px;
  }
`;
export const Image = styled.img`
  width: 46px;
  height: 46px;
`;

export const Item = styled.li`
  background-color: ${theme.color.secondaryGrey};
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`;

export const InnerItemWrap = styled.div`
  display: flex;
  gap: 6px;
`;

export const FoodName = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;
`;

export const Amount = styled.p`
  font-size: 14px;
  line-height: 20px;
`;
