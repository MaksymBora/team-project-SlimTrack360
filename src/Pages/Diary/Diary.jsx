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
import FoodIntake from '../../components/Diary/meal/FoodIntake';
import { GoBackPage } from '../../components/Diary/meal/GoBackPage';

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
          <GoBackPage />
        </Link>
        <MainTitle>Diary</MainTitle>
      </DiaryCardHeader>
      <PartsOfMeal>
        <FoodIntake title="Breakfast" />
        <FoodIntake title="Dinner" />
        <FoodIntake title="Lunch" />
        <FoodIntake title="Snack" />
      </PartsOfMeal>
    </ContainerDiary>
  );
};

export default Diary;
