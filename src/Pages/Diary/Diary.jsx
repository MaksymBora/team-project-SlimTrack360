import { Link } from 'react-router-dom';
import GoBackPage from '../../components/diary/meal/GoBackPage';
import Breakfast from '../../components/diary/meal/Breakfast';
import { MainTitle } from '../../Pages/Diary/DiaryPage.styled';
import Dinner from '../../components/diary/meal/Dinner';
import Lunch from '../../components/diary/meal/Lunch';
import Snack from '../../components/diary/meal/Snack';
import {
  DiaryCardHeader,
  PartsOfMeal,
} from '../../components/diary/meal/DiaryCard.styled';
import { ContainerDiary } from './DiaryPage.styled';

const Diary = () => {
  return (
    <ContainerDiary>
      <DiaryCardHeader>
        <Link to="/">
          <GoBackPage />
        </Link>
        <MainTitle>Diary</MainTitle>
      </DiaryCardHeader>
      <PartsOfMeal>
        <Breakfast />
        <Dinner />
        <Lunch />
        <Snack />
      </PartsOfMeal>
    </ContainerDiary>
  );
};

export default Diary;
