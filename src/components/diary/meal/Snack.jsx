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
  const category = 'Snack';
  const categoryImage = snackImg;
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

      <FoodList category={category} categoryImage={categoryImage} />
    </CardContainer>
  );
};

export default Snack;
