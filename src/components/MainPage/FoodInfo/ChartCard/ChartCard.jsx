import { DoughnutChart } from '../../DoughnutChart/DoughnutChart';
import {
  ChartWrapper,
  ChartElement,
  InfoWrapper,
  ElementsTitle,
  ValueWrap,
  GoalWrap,
  LeftWrap,
  Value,
  Percentage,
} from './ChartCard.styled';

export const ChartCard = (props) => {
  const { title, chartBcg, elementGoal, elementValue } = props;

  let left = (elementGoal - elementValue).toFixed(1);

  if (isNaN(left) || left < 0 || left === Infinity) {
    left = 0.0;
  }
  let elementPercentage = Math.round((elementValue * 100) / elementGoal);

  if (elementPercentage === Infinity || isNaN(elementPercentage)) {
    elementPercentage = 0;
  }

  if (elementPercentage > 100) {
    elementPercentage = 100;
  }

  return (
    <>
      <ChartWrapper>
        <ChartElement>
          <DoughnutChart
            dailyCalories={elementGoal}
            inputValue={elementValue}
            chartBcg={chartBcg}
          />
          <Percentage>
            <p>{`${elementPercentage}%`}</p>
          </Percentage>
        </ChartElement>
        <InfoWrapper>
          <ElementsTitle>{title}</ElementsTitle>
          <ValueWrap>
            <GoalWrap>
              Goal: <Value>{elementGoal}</Value>
            </GoalWrap>
            <LeftWrap>
              left: <Value>{left}</Value>
            </LeftWrap>
          </ValueWrap>
        </InfoWrapper>
      </ChartWrapper>
    </>
  );
};
