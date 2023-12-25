import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 100000;
`;

export const Content = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: #0f0f0f;
  padding: 24px 10px 24px 10px;
  z-index: 1000000;
  @media screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    margin: 24px 40px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.h2`
  color: white;

  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
  }
`;
export const Label = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  margin-bottom: 32px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: inherit;
  color: white;
  @media screen and (min-width: 834px) {
    width: 212px;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6b6;
  }
`;

export const Confirm = styled.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background-color: ${(p) => p.theme.color.primaryGreenLite};

  cursor: pointer;

  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${(p) => p.theme.color.primaryWhite};
    border: 1px solid ${(p) => p.theme.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${(p) => p.theme.color.primaryGreenLite};
    border: 1px solid transparent;
    font-weight: 700;
    color: ${(p) => p.theme.color.primaryBlack};
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const Cancel = styled.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  background: transparent;
  color: #b6b6b6;
  margin-top: 8px;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 36px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.color.primaryWhite};
  }
  transition: all 0.3s ease-in-out;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
  }
`;
