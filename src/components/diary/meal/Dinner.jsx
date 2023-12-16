import TitlePeriod from '../foodList/TitlePeriod';
import dinnerImg from '../../../assets/images/diary/dinner.png';
import dinnerImg2x from '../../../assets/images/diary/dinner-2x.png';

import FoodList from '../foodList/FoodList';

import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Dinner = () => {
  return (
    <CardContainer>
      <TabletFood>
        {' '}
        <CardTitleContainer>
          <img
            srcSet={`${dinnerImg} 1x, ${dinnerImg2x} 2x`}
            src={dinnerImg}
            alt="dinner"
            width="32"
            height="32"
          />
          <Title>Dinner</Title>
        </CardTitleContainer>
        <TitlePeriod />
      </TabletFood>

      <FoodList type="dinner" />
    </CardContainer>
  );
};

export default Dinner;
