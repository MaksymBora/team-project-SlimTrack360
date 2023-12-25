import styled from 'styled-components';
import { theme } from '../../../styles/index';
export const Paragraph = styled.p`
  color: ${theme.color.primaryGrey};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-top: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    animation: 1s ease-in-out infinite;
    color: ${theme.color.primaryWhite};
  }

  @media screen and (min-width: 834px) {
    padding-top: 20px;
  }
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 54px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    padding-top: 222px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 184px;
  }
`;
export const LinkSignup = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: all 0.3s ease-in-out;
  animation: 1s ease-in-out infinite;
  color: ${theme.color.primaryWhite};
  &:hover {
    cursor: pointer;
    animation: 1s ease-in-out infinite;
    color: ${theme.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${theme.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${theme.color.primaryBlack};
  }
`;
// export const Des = styled.div`
//   transition: all 0.3s ease-in-out;
//   animation: 1s ease-in-out infinite;
//   color: ${theme.color.primaryWhite};
//   &:hover {
//     cursor: pointer;
//     animation: 1s ease-in-out infinite;
//     color: ${theme.color.primaryGreenLite};
//   }
//   &:focus {
//     background-color: ${theme.color.primaryGreenLite};
//     border: 1px solid transparent;
//     color: ${theme.color.primaryBlack};
//   }
// `;
