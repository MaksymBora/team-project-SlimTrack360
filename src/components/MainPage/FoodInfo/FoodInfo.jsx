import { useSelector } from 'react-redux';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { ChartCard } from './ChartCard/ChartCard.jsx';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
  Title,
} from './FoodInfo.styled';
import {
  selectDailyGoalCarbonohidrates,
  selectDailyGoalFat,
  selectDailyGoalProtein,
  selectdailyGoalCalories,
} from '../../../Redux/userAuth/selector.js';
import {
  getDiaryCalories,
  selectTotalCarbon,
  selectTotalFat,
  selectTotalProteins,
} from '../../../Redux/foodIntake/selector.js';

const carbBcg = 'rgba(255, 196, 247, 1)';

const proteinBcg = 'rgba(255, 243, 183, 1)';

const fatBcg = 'rgba(182, 182, 182, 1)';

export const FoodInfo = () => {
  const carbonsGoal = useSelector(selectDailyGoalCarbonohidrates);
  const proteinGoal = useSelector(selectDailyGoalProtein);
  const fatGoal = useSelector(selectDailyGoalFat);
  const dailyCalories = useSelector(selectdailyGoalCalories);

  const totalProteins = useSelector(selectTotalProteins);
  const totalCarbon = useSelector(selectTotalCarbon);
  const totalFat = useSelector(selectTotalFat);
  const totalCalories = useSelector(getDiaryCalories);
  const displayTotalCalories = totalCalories || 0;

  let caloriesChartBcg = '#45FFBC';

  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            dailyCalories={dailyCalories}
            inputValue={displayTotalCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <p>{displayTotalCalories}</p>
            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbonsGoal}
            elementValue={totalCarbon}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={proteinGoal}
            elementValue={totalProteins}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fatGoal}
            elementValue={totalFat}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
