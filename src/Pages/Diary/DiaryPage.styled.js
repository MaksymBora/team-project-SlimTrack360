import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerDiary = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 20px 10px;

  @media screen and (min-width: 320px) {
    padding: 16px 10px;
    width: 320px;
  }

  @media screen and (min-width: 834px) {
    width: 800px;
    padding: 24px 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1382px;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  font-family: Poppins;
  color: ${theme.color.primaryWhite};
`;

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  transition: ${theme.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
    fill: ${theme.color.primaryWhite};
  }
  &:focus {
    fill: ${theme.color.primaryLiteGreen};
  }
`;

export const SvgArrowRight = styled.svg`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;

export const TitlePage = styled.h2`
  display: inline;
  font-size: 24px;
`;

export const SectionDiary = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const NamePeriodH3 = styled.h3`
  display: inline;
  font-size: 18px;
`;

const fontNorm = `
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; 
`;

export const TextSpan = styled.span`
  font-size: 14px;
  ${fontNorm}
  color: ${theme.color.primaryWhite};
`;

export const TextIndexSpan = styled.span`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
  color: ${theme.color.primaryGreenLite};
  width: 160px;
  transition: ${theme.transition.main};
  &:hover {
    transform: scale(1.2);
    animation: 1s ease-in-out infinite;
  }
  // &:focus {

  // }
`;

export const ListMeatContainer = styled.div`
  margin-left: 0;
  margin-top: 6px;
  padding-left: 0;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  overflow-y: auto;

  @media (min-width: 320px) {
    padding: 0 12px 16px;
    width: 300px;
  }

  @media (min-width: 834px) {
    padding: 0 14px 32px;
    width: 720px;
  }

  @media (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  margin-top: 30px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
  }
`;
export const ItemBox = styled.div`
  display: flex;

  @media (min-width: 320px) {
    flex-wrap: wrap;
  }

  @media (min-width: 834px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
  }
`;

export const Ul = styled.ul`
  margin-left: 0;
  padding-left: 0;
`;

export const ItemFoodName = styled.input`
  color: ${theme.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 164px;
  }

  @media (min-width: 834px) {
    width: 275px;
  }

  @media (min-width: 1440px) {
    width: 260px;
  }
`;

export const ItemFoodCarbon = styled.input`
  color: ${theme.color.primaryWhite};
  font-size: 14px;
  margin-right: 12px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;

export const ItemFoodProt = styled.input`
  color: ${theme.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;
export const ItemFoodFat = styled.input`
  color: ${theme.color.primaryWhite};
  margin-right: 12px;
  font-size: 14px;
  ${fontNorm}
  border: none;
  background-color: transparent;
  outline: none;

  @media (min-width: 320px) {
    width: 30px;
    margin-left: 6px;
  }

  @media (min-width: 834px) {
    width: 90px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    width: 80px;
  }
`;
export const ItemFoodIndex = styled.div`
  color: ${theme.color.primaryWhite};
  margin-right: 16px;
  font-size: 14px;
  ${fontNorm}
  background-color: transparent;
  width: 16px;
`;

export const DiaryCardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;

export const PartsOfMeal = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
