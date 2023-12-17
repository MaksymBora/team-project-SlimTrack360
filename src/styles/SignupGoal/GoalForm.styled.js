import styled from 'styled-components';
import { theme } from '../../styles/index';

export const StylesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

export const StylesRadioBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StylesBtnForm = styled.input`
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
