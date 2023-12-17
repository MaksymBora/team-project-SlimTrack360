import {
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from '../../styles/SignupGoal/GoalForm.styled';

export const GoalForm = () => {
  return (
    <StylesForm>
      <StylesRadioBtn>
        <span>
          <input type="radio" id="lose_fat" name="goal" value="lose_fat" />
          <StylesLabelForm htmlFor="lose_fat">Lose Fat</StylesLabelForm>
        </span>

        <span>
          <input type="radio" id="maintain" name="goal" value="maintain" />
          <StylesLabelForm htmlFor="maintain">Maintain</StylesLabelForm>
        </span>

        <span>
          <input
            type="radio"
            id="gain_muscle"
            name="goal"
            value="gain_muscle"
          />
          <StylesLabelForm htmlFor="gain_muscle">Gain Muscle</StylesLabelForm>
        </span>
      </StylesRadioBtn>

      <StylesBtnForm type="submit" value="Next" />
    </StylesForm>
  );
};

export default GoalForm;
