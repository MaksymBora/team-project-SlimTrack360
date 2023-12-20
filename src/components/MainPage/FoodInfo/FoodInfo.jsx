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
  let dailyCalories = 1700; //p редакс Auth

  let diaryCalories = 1360; // redux diary

  let caloriesChartBcg = '#45FFBC';

  let proteinSum = 119.5; // redux diary
  let carbonohidratesSum = 136; // redux diary
  let fatsSum = 44.8; // redux diary

  let carbsGoal = 170; //p редакс Auth
  let protGoal = 135.5; //p редакс Auth
  let fatsGoal = 56; //p редакс Auth

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
