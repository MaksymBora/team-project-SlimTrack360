import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const ChartWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ChartElement = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

export const Percentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ElementsTitle = styled.h3`
  color: ${theme.color.primaryWhite};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ValueWrap = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const Value = styled.span`
  font-weight: 500;
  color: ${theme.color.primaryGrey};
`;

export const GoalWrap = styled.p`
  width: 78px;
`;

export const LeftWrap = styled.p`
  width: 78px;
`;
