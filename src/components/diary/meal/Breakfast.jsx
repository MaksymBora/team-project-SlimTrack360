import TitlePeriod from '../foodList/TitlePeriod';
import breakfastImg from '../../../assets/images/diary/breakfast.png';
import breakfastImg2x from '../../../assets/images/diary/breakfast-2x.png';
import FoodList from '../foodList/FoodList';
import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Breakfast = () => {
  return (
    <CardContainer>
      <TabletFood>
        <CardTitleContainer>
          <img
            srcSet={`${breakfastImg} 1x, ${breakfastImg2x} 2x`}
            src={breakfastImg}
            alt="breakfast"
            width="32"
            height="32"
          />
          <Title>Breakfast</Title>
        </CardTitleContainer>

        <TitlePeriod />
      </TabletFood>
      <FoodList type="breakfast" />
    </CardContainer>
  );
};

export default Breakfast;
