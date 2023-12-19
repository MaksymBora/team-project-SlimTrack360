import TitlePeriod from '../foodList/TitlePeriod';
import lunchImg from '../../../assets/images/diary/lunch.png';
import lunchImg2x from '../../../assets/images/diary/lunch-2x.png';

import FoodList from '../foodList/FoodList';

import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Lunch = () => {
  const category = 'Lunch';
  const categoryImage = lunchImg;
  return (
    <CardContainer>
      <TabletFood>
        <CardTitleContainer>
          <img
            srcSet={`${lunchImg} 1x, ${lunchImg2x} 2x`}
            src={lunchImg}
            alt="lunch"
            width="32"
            height="32"
          />
          <Title>Lunch</Title>
        </CardTitleContainer>

        <TitlePeriod />
      </TabletFood>

      <FoodList category={category} categoryImage={categoryImage} />
    </CardContainer>
  );
};

export default Lunch;
