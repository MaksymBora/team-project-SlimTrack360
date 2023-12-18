import { theme } from '../../styles/index';
import {
  Container,
  TitleWrap,
  MainTitle,
  GoalLink,
  TextLink,
  BlocksWrap,
  FoodStatistics,
} from './Main.styled';
import { DailyGoal } from '../../components/MainPage/DailyGoal/DailyGoal';
import Icon from '../../components/common/Icon';
import { WaterInfo } from '../../components/MainPage/WaterInfo/WaterInfo';
import { FoodInfo } from '../../components/MainPage/FoodInfo/FoodInfo';
import { DiaryInfo } from '../../components/MainPage/DiaryInfo/DiaryInfo';
import RecommendedFood from '../../components/MainPage/RecommendedFood/RecommendedFood';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectValue } from '../../Redux/waterIntake/selector';
import { getWaterToday } from '../../Redux/waterIntake/operations';
import { fetchFood } from '../../Redux/recommended/operations';
import { date } from '../../utils/dateToday.js';

const Main = () => {
  const totalWaterToday = useSelector(selectValue);
  const dispatch = useDispatch();

  useEffect(() => {
    const dateToday = {
      date,
    };

    dispatch(fetchFood());
    dispatch(getWaterToday(dateToday));
  }, [totalWaterToday, dispatch]);

  return (
    <Container>
      <TitleWrap>
        <MainTitle>Today</MainTitle>
        <GoalLink to="/dashboard">
          <TextLink>On the way to the goal</TextLink>
          <Icon
            name={'icon-arrow-right'}
            width={'16px'}
            height={'16px'}
            fill={`${theme.color.primaryGrey}`}
          />
        </GoalLink>
      </TitleWrap>
      <BlocksWrap>
        <DailyGoal />
        <WaterInfo />
        <FoodInfo />
      </BlocksWrap>
      <FoodStatistics>
        <DiaryInfo />
        <RecommendedFood />
      </FoodStatistics>
    </Container>
  );
};

export default Main;
