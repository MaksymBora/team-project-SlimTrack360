import {
  ButtonStyle,
  TextIndexSpan,
} from '../../../Pages/Diary/DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../meal/Product';
import RecordDiaryModal from '../../../components/RecordDiaryModal/RecordDiaryModal';
import { useState } from 'react';

const FoodList = ({ categoryImage, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Product />
      <ButtonStyle onClick={openModal}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>

      <RecordDiaryModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        category={category}
        categoryImage={categoryImage}
      />
    </Container>
  );
};

export default FoodList;
