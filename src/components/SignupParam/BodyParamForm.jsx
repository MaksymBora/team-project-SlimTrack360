import {
  AgeInputLabel,
  AgeInputStiles,
  AgeInputWrapper,
  StylesBtnForm,
  StylesForm,
} from '../../styles/SignupAge/GenderForm.styled';

export const BodyParamForm = () => {
  return (
    <StylesForm>
      <AgeInputWrapper>
        <AgeInputLabel htmlFor="heighInput">Height</AgeInputLabel>
        <AgeInputStiles
          type="number"
          id="heighInput"
          placeholder="Enter your height"
        />
      </AgeInputWrapper>

      <AgeInputWrapper>
        <AgeInputLabel htmlFor="weightInput">Weight</AgeInputLabel>
        <AgeInputStiles
          type="number"
          id="weightInput"
          placeholder="Enter your weight"
        />
      </AgeInputWrapper>

      <StylesBtnForm type="button">Next</StylesBtnForm>
    </StylesForm>
  );
};

export default BodyParamForm;
