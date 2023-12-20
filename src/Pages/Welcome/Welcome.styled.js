import styled from 'styled-components';

export const Div = styled.div`
  max-width: 833px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: flex-start;
  }
`;
