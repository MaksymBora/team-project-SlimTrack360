import {
  HeightInputWrapper,
  InputLabel,
  InputStiles,
  StylesBtnForm,
  StylesForm,
  WeightInputWrapper,
} from '../../styles/SignupParam/BodyParamForm.styled';

export const BodyParamForm = () => {
  return (
    <StylesForm>
      <HeightInputWrapper>
        <InputLabel htmlFor="heighInput">Height</InputLabel>
        <InputStiles
          type="number"
          id="heighInput"
          placeholder="Enter your height"
        />
      </HeightInputWrapper>

      <WeightInputWrapper>
        <InputLabel htmlFor="weightInput">Weight</InputLabel>
        <InputStiles
          type="number"
          id="weightInput"
          placeholder="Enter your weight"
        />
      </WeightInputWrapper>

      <StylesBtnForm type="button">Next</StylesBtnForm>
    </StylesForm>
  );
};

export default BodyParamForm;
