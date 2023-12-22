import { styled } from 'styled-components';
import { theme } from './../../../styles/theme';

export const Modal = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  background-color: ${theme.color.primaryBlack2};
  border-radius: 12px;
  padding: 24px 0 24px 24px;
`;

export const CloseBtn = styled.button`
  background: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  position: absolute;
  right: 16px;
  top: 16px;
  fill: ${theme.color.primaryGrey};
  stroke: ${theme.color.primaryGrey};
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const OptionBlock = styled.div`
  background-color: inherit;
  border: none;

  display: flex;
`;

export const IconBlock = styled.div`
  img {
    width: 49px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #5f5e5c;
  }
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3px 0 3px 0;
`;
export const Goal = styled.p`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
export const GoalIcon = styled.button`
  border: none;
  background-color: transparent;
  svg {
    width: 14px;
    height: 14px;
    fill: ${theme.color.primaryGreenLite};
    stroke: ${theme.color.primaryGreenLite};
  }
`;
export const Kg = styled.span`
  color: ${theme.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;
export const InfoBlockText = styled.div`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  display: flex;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  // opacity: 80%;
  @media screen and (min-width: 768px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`;
