import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const PeriodContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${theme.color.primaryWhite};
`;

export const Span = styled.span`
  font-weight: 500;
  color: ${theme.color.primaryGrey};
  margin-left: 4px;
`;

export const ProteinAndFatContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
