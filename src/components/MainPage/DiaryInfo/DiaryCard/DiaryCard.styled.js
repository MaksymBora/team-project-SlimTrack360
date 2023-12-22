import styled from 'styled-components';
import { theme } from '../../../../styles/index';

export const CardWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${theme.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const ImageWrap = styled.div`
  width: 36px;
  height: 36px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: ${theme.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbWrap = styled.p`
  width: 164px;
`;

export const ProteinWrap = styled.p`
  width: 92px;
`;
export const FatWrap = styled.p`
  width: 62px;
`;
export const ValueSpan = styled.span`
  color: ${theme.color.primaryGrey};

  font-weight: 500;
`;
export const ButtonDelete = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${theme.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  outline: none;
  padding: 0;
`;