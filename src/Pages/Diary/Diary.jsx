/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  MainTitle,
  DiaryCardHeader,
  PartsOfMeal,
  ContainerDiary,
} from './DiaryPage.styled';
import { fetchFoodIntake } from '../../Redux/foodIntake/operations';
import { date } from '../../utils/dateToday';
import { FoodIntakeTable } from '../../components/Diary/Meal/FoodIntakeTable';
import { GoBackLink } from '../../components/Diary/Meal/GoBackLink';

const Diary = () => {
  const dispatch = useDispatch();

  const dateToday = {
    date,
  };

  useEffect(() => {
    dispatch(fetchFoodIntake(dateToday));
  }, [dispatch]);

  return (
    <ContainerDiary>
      <DiaryCardHeader>
        <Link to="/">
          <GoBackLink />
        </Link>

        <MainTitle>Diary</MainTitle>
      </DiaryCardHeader>
      <PartsOfMeal>
        <FoodIntakeTable title="Breakfast" />
        <FoodIntakeTable title="Dinner" />
        <FoodIntakeTable title="Lunch" />
        <FoodIntakeTable title="Snack" />
      </PartsOfMeal>
    </ContainerDiary>
  );
};

export default Diary;
