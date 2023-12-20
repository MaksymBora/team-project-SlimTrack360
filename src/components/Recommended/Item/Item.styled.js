import { theme } from '../../../styles/theme';
import styled from 'styled-components';

export const Image = styled.img`
  width: 46px;
  height: 46px;
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
