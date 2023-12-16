import styled from 'styled-components';
// import { theme } from '../../styles/index';

export const Container = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`;
