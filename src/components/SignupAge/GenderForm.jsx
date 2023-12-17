import {
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from '../../styles/SignupAge/GenderForm.styled';

export const GenderForm = () => {
  return (
    <StylesForm>
      <StylesRadioBtn>
        <CustomRadio>
          <CustomRadioInput type="radio" id="male" name="gender" value="male" />
          <StylesLabelForm htmlFor="male">Male</StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          <StylesLabelForm htmlFor="female">Female</StylesLabelForm>
        </CustomRadio>
      </StylesRadioBtn>

      <StylesBtnForm type="button">Next</StylesBtnForm>
    </StylesForm>
  );
};

export default GenderForm;
