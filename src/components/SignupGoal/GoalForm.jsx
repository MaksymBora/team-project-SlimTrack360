import {
  StylesBtnForm,
  StylesForm,
  StylesRadioBtn,
} from '../../styles/SignupGoal/GoalForm.styled';

export const GoalForm = () => {
  return (
    <StylesForm>
      <StylesRadioBtn>
        <span>
          <input type="radio" id="lose_fat" name="goal" value="lose_fat" />
          <label htmlFor="lose_fat">Lose Fat</label>
        </span>

        <span>
          <input type="radio" id="maintain" name="goal" value="maintain" />
          <label htmlFor="maintain">Maintain</label>
        </span>

        <span>
          <input
            type="radio"
            id="gain_muscle"
            name="goal"
            value="gain_muscle"
          />
          <label htmlFor="gain_muscle">Gain Muscle</label>
        </span>
      </StylesRadioBtn>

      <StylesBtnForm type="submit" value="Next" />
    </StylesForm>
  );
};

export default GoalForm;
