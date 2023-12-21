import {
  ButtonStyle,
  TextIndexSpan,
} from '../../../Pages/Diary/DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../meal/Product';
import RecordDiaryModal from '../../RecordDiaryModal/RecordDiaryModal';
import { useState } from 'react';

const FoodList = ({ categoryImage, category, title }) => {
  const [isModal, setIsModal] = useState(false);

  const isModalOpen = () => {
    setIsModal((prevState) => !prevState);
  };

  return (
    <Container>
      <Product title={title} />
      <ButtonStyle onClick={isModalOpen}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>

      <RecordDiaryModal
        isModalOpen={isModal}
        onClose={isModalOpen}
        category={category}
        categoryImage={categoryImage}
      />
    </Container>
  );
};

export default FoodList;
