import styled from 'styled-components';
import { theme } from '../../styles/index';
export const Main = styled.div``;
export const Div = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;
export const Form = styled.form``;
export const MainText = styled.h1`
  color: ${theme.color.primaryWhite};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  padding-top: 24px;
  padding-bottom: 16px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
export const Subtitle = styled.h3`
  color: ${theme.color.primaryGrey};
  width: 300px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    width: 444px;
  }
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
export const Label = styled.label``;
export const Title = styled.div`
  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 300px;
  border-radius: 12px;
  border: 1px solid ${theme.color.primaryGreenLite};
  background: ${theme.color.primaryBlack2};
  @media screen and (min-width: 768px) {
    width: 380px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;
export const Input = styled.input`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  width: 280px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;
export const Wrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled.button`
  padding: 8px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.color.primaryGreenLite};
  width: 100%;
  color: ${theme.color.primaryBlack2};
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  //   margin-bottom: 48px;
`;
export const Subsection = styled.p`
  color: ${theme.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const SignInLink = styled.h3`
  color: ${theme.color.primaryWhite};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    // padding-top: 206px;
  }
  @media screen and (min-width: 1440px) {
    // padding-top: 168px;
  }
`;
