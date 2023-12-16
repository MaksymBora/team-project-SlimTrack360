import styled from 'styled-components';
// import { theme } from '../../styles/index';

export const Container = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 834px;
    padding: 40px 27px 366px 27px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 86px 150px;
    gap: 104px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
