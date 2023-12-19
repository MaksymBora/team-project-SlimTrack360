import styled from 'styled-components';

export const Box = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 24px 10px 40px 10px;

  @media screen and (min-width: 834px) {
    align-items: center;
    display: flex;
    width: 800px;
    justify-content: center;
    padding: 40px 10px 286px 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    justify-content: normal;
    padding: 40px 150px 72px 150px;
  }
`;
