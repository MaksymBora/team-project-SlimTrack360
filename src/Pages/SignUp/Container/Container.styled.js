import styled from 'styled-components';

export const Box = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 24px 10px 40px 10px;

  @media screen and (min-width: 768px) {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    width: 768px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 40px 150px 72px 150px;
  }
`;
