import {
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from '../../styles/SignupGoal/GoalForm.styled';

export const GenderlForm = () => {
  return (
    <StylesForm>
      <StylesRadioBtn>
        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="lose_fat"
            name="goal"
            value="lose_fat"
          />
          <StylesLabelForm htmlFor="lose_fat">Lose Fat</StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="maintain"
            name="goal"
            value="maintain"
          />
          <StylesLabelForm htmlFor="maintain">Maintain</StylesLabelForm>
        </CustomRadio>

        <CustomRadio>
          <CustomRadioInput
            type="radio"
            id="gain_muscle"
            name="goal"
            value="gain_muscle"
          />
          <StylesLabelForm htmlFor="gain_muscle">Gain Muscle</StylesLabelForm>
        </CustomRadio>
      </StylesRadioBtn>

      <StylesBtnForm type="button">Next</StylesBtnForm>
    </StylesForm>
  );
};

export default GenderlForm;
