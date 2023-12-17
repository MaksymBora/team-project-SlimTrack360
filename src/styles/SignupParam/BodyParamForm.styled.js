import styled from 'styled-components';
import { theme } from '../index';

export const StylesForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const StylesBtnForm = styled.button`
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  padding: 8px 10px;
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border: 1px solid;
  transition: ${theme.transition.main};

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid ${theme.color.primaryGreenLite};
  }
`;

export const HeightInputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const WeightInputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputLabel = styled.label`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const InputStiles = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  border-radius: 12px;
  color: ${theme.color.primaryWhite};
  border: 1px solid ${theme.color.primaryGreenLite};
  background: ${theme.color.primaryBlack2};
  padding: 8px 10px;
  &::placeholder {
    color: ${theme.color.primaryGrey};
  }
`;
