import styled from 'styled-components';

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
export const Content = styled.div`
  position: relative;
  z-index: 1000;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: rgba(15, 15, 15, 1);
  padding: 16px 12px 30px 12px;
  @media screen and (min-width: 768px) {
    width: 338px;
    height: 280px;
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
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 768px) {
    width: 258px;
    height: 232px;

    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    top: 239px;
    left: 591px;
  }
`;
export const Label = styled.label`
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
`;
export const Confirm = styled.button`
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: rgba(227, 255, 168, 1);
`;
export const Cancel = styled.button`
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  background: transparent;
  color: #b6b6b6;
`;
