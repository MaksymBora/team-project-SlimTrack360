import styled from 'styled-components';
import { theme } from '../../../styles/theme';
export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    gap: 110px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px;
  @media (min-width: 834px) {
    margin-bottom: 32px;
  }
`;
export const ProductTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ProductPower = styled.div`
  display: flex;
  margin-left: 25px;
  @media (min-width: 834px) {
    gap: 32px;
    margin-left: 100px;
  }
`;
export const Index = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
export const ProductName = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  width: 178px;
  @media (min-width: 834px) {
    width: 260px;
  }
`;
export const Text = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  width: 80px;
`;
export const SpanElement = styled.span`
  color: ${theme.color.primaryGrey};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 12px;
  margin-left: 0;
  @media (min-width: 834px) {
    opacity: 0;
  }
`;
export const EditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  color: ${theme.color.primaryGrey};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: ${theme.transition.main};
  &:hover {
    color: ${theme.color.primaryWhite};
    animation: 1s ease-in-out infinite;
  }
  &:focus {
    color: ${theme.color.primaryGrey};
  }
`;
export const Svg = styled.svg`
  stroke: ${theme.color.primaryGrey};
  width: 16px;
  height: 16px;
`;
export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Paragraph = styled.p`
  color: ${theme.color.primaryWhite};
  margin-right: 16px;
`;
