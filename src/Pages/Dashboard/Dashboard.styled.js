import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 76px;

  @media screen and (min-width: 834px) {
    width: 800px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 1382px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 40px;
  }
`;
