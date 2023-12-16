import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { ChartCard } from './ChartCard/ChartCard.jsx';
import {
  CaloriesChart,
  ChartInfoWrap,
  FoodInfoCard,
  InfoWrap,
  Title,
} from './FoodInfo.styled';

const carbBcg = 'rgba(255, 196, 247, 1)';

const proteinBcg = 'rgba(255, 243, 183, 1)';

const fatBcg = 'rgba(182, 182, 182, 1)';

export const FoodInfo = () => {
  let dailyCalories = 1700;
  let diaryCalories = 1360;

  let caloriesChartBcg = '#45FFBC';

  let proteinSum = 119.5;
  let carbonohidratesSum = 136;
  let fatsSum = 44.8;

  let carbsGoal = 170;
  let protGoal = 135.5;
  let fatsGoal = 56;

  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <DoughnutChart
            dailyCalories={dailyCalories}
            inputValue={diaryCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <p>{diaryCalories}</p>
            <p>calories</p>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <ChartCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbsGoal}
            elementValue={carbonohidratesSum}
          />
          <ChartCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={protGoal}
            elementValue={proteinSum}
          />
          <ChartCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fatsGoal}
            elementValue={fatsSum}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};
