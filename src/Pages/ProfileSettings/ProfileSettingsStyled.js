import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100%;

  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 72px;
  }
`;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 834px) {
    width: 800px;
    padding: 0 27px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > img {
    max-width: 536px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`;

export { Container, Section, Title, ContentContainer };
