// import TitlePeriod from './TitlePeriod/TitlePeriod';
import snackImg from '../../../assets/images/diary/snack.png';
import snackImg2x from '../../../assets/images/diary/snack-2x.png';

import FoodList from '../foodList/FoodList';
import {
  CardContainer,
  CardTitleContainer,
  Title,
  TabletFood,
} from './DiaryCard.styled';

const Snack = () => {
  return (
    <CardContainer>
      <TabletFood>
        <CardTitleContainer>
          <img
            srcSet={`${snackImg} 1x, ${snackImg2x} 2x`}
            src={snackImg}
            alt="snack"
            width="32"
            height="32"
          />
          <Title>Snack</Title>
        </CardTitleContainer>

        {/* <TitlePeriod product={product} /> */}
      </TabletFood>

      <FoodList type="snack" />
    </CardContainer>
  );
};

export default Snack;
