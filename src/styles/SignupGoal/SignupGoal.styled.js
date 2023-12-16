import styled from 'styled-components';
// import { theme } from '../../styles/index';

export const Container = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 834px;
    align-items: center;
    padding-left: 195px;
    padding-right: 195px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 150px;
    padding-right: 150px;
    gap: 104px;
  }
`;

export const StylesSection = styled.section`
  padding-bottom: 20px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 86px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
  }
`;

export const DescWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    align-items: stretch;
  }
`;
