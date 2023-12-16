export const GoalForm = () => {
  return (
    <form>
      <input type="radio" id="lose_fat" name="goal" value="lose_fat" />
      <label htmlFor="lose_fat">Lose Fat</label>

      <input type="radio" id="maintain" name="goal" value="maintain" />
      <label htmlFor="maintain">Maintain</label>

      <input type="radio" id="gain_muscle" name="goal" value="gain_muscle" />
      <label htmlFor="gain_muscle">Gain Muscle</label>

      <input type="submit" value="Next" />
    </form>
  );
};

export default GoalForm;
