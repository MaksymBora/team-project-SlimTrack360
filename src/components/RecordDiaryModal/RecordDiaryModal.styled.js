import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { theme } from '../../styles/theme';

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);

  width: 300px;
  height: 546px;

  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.primaryBlack};
  border-radius: 12px;

  transition: ${theme.transition.main};
  z-index: 10;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 708px;
    height: 408px;
    padding: 24px;
  }
`;
export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500; //PoppinsMedium
  line-height: 30px;
  color: ${theme.color.primaryWhite};
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 30px;
    line-height: 36px;
  }
`;
export const MealWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
`;
export const MealImage = styled.img`
  width: 32px;
  height: 32px;
`;
export const MealTitle = styled.h3`
  font-size: 18px;
  font-weight: 400; //PoppinsRegular
  line-height: 26px;
  color: ${theme.color.primaryWhite};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 22px;
    line-height: 32px;
  }
`;
export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  flex-grow: 1; // форма має розтягуватися та займати доступний вільний простір
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FieldArrayWrapper = styled.div`
  max-height: 320px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-height: 216px;
  }
`;
export const MealsList = styled.ul`
  overflow-y: auto;
  height: 210px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    height: calc(100% - 44px);
  }

  &::-webkit-scrollbar {
    background-color: ${theme.color.primaryBlack2};
    border-radius: 12px;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 5px;
  }
`;

export const MealItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 12px;
    
  & > div:nth-child(-n + 3) {
    flex-basis: 100%; 
    margin-bottom: 16px;
  }

  & > div:nth-last-child(-n + 3) {
    flex-basis: calc(43.48%);
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    & > div:nth-child(-n + 3) {
      margin-bottom: 0; 
    }
    margin-bottom: 12px;
    display:grid;
    grid-gap: 12px;
    grid-template-columns: 38.15% 15.26% 13.12% 9.30% 11.94% 3.05%; // з урахуванням скрола 5px
    
    & > div:nth-child(1) {.
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > div:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
  @media screen and (min-width:1440px){
    overflow: hidden;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px 10px;
  border: 1.5px solid ${theme.color.primaryGreenLite};
  border-radius: 12px;
  background-color: ${theme.color.primaryBlack2};
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${theme.color.primaryWhite};
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${theme.color.primaryGrey};
  }
  &:hover,
  &:focus {
    border-color: ${theme.color.primaryViolet};
  }
`;
export const StyledError = styled(ErrorMessage)`
  padding: 0 5px;
  font-size: 8px;
  font-weight: 400
  line-height: 10px;
  color: ${theme.color.primaryViolet};
`;
export const ButtonAddMore = styled.button`
  max-width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  background-color: inherit;
  font-size: 14px;
  font-weight: 500; //PoppinsMedium;
  line-height: 20px;
  color: ${theme.color.primaryGreenLite};
  transition: ${theme.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
  }
`;
export const ButtonDelete = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  transition: ${theme.transition.main};
  &:hover {
    transform: scale(1.1);
    animation: 1s ease-in-out infinite;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }
`;
export const ButtonConfirm = styled.button`
  padding: 8px 10px;
  width: 100%;
  background-color: ${theme.color.primaryGreenLite};
  border: 1.5px solid ${theme.color.primaryGreenLite};
  color: ${theme.color.primaryBlack2};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500; // PoppinsMedium
  line-height: 20px;
  transition: ${theme.transition.main};
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 212px;
  }
  &:hover {
    animation: 1s ease-in-out infinite;
    background-color: ${theme.color.primaryBlack};
    color: ${theme.color.primaryWhite};
  }
  &:focus {
    background-color: ${theme.color.primaryGreenLite};
    color: ${theme.color.primaryBlack};
  }
`;
export const ButtonCancel = styled.button`
  padding: 8px 10px;
  width: 100%;
  background-color: inherit;
  border: transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400; //PoppinsRegular
  line-height: 20px;
  color: ${theme.color.primaryGrey};
  transition: ${theme.transition.main};
  border: 1.5px solid transparent;
  &:hover {
    border: 1.5px solid ${theme.color.primaryGreenLite};
    animation: 1s ease-in-out infinite;
    background-color: ${theme.color.primaryBlack};
    color: ${theme.color.primaryWhite};
  }
  &:focus {
    background-color: ${theme.color.primaryGreenLite};
    color: ${theme.color.primaryBlack};
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 212px;
  }
`;
