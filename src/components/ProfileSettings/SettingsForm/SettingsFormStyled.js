import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 40px;
  width: 100%;

  @media screen and (min-width: 834px) {
    grid-template-columns: 212px 1fr;
    column-gap: 60px;
    max-width: 491px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormFieldTitle = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const GenderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ActivityBoxField = styled(FormField)`
  @media screen and (min-width: 834px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const ActivitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    grid-column-start: 1;
    grid-column-end: 3;

    button {
      width: 212px;
    }
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  text-align: center;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: ${(p) => p.theme.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid transparent;
    animation: 1s ease-in-out infinite;
    background-color: transparent;
    color: ${(p) => p.theme.color.primaryWhite};
    border: 1px solid ${(p) => p.theme.color.primaryGreenLite};
  }
  &:focus {
    background-color: ${(p) => p.theme.color.primaryGreenLite};
    border: 1px solid transparent;
    color: ${(p) => p.theme.color.primaryBlack};
  }
`;

const CancelBtn = styled.button`
  font-size: 14px;
  line-height: 1.4;
  background-color: transparent;
  color: ${(p) => p.theme.color.primaryGrey};
  border-radius: 12px;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.color.primaryWhite};
  }
  transition: all 0.3s ease-in-out;
`;

export {
  Form,
  FormField,
  FormFieldTitle,
  GenderList,
  ActivitiesList,
  SubmitBtn,
  CancelBtn,
  ButtonsBox,
  ActivityBoxField,
};
