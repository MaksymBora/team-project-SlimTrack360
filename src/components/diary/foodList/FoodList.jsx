import {
  ButtonStyle,
  TextIndexSpan,
} from '../../../Pages/Diary/DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../Meal/Product';
import RecordDiaryModal from '../../RecordDiaryModal/RecordDiaryModal';
import { useState } from 'react';

const FoodList = ({ categoryImage, category, title }) => {
  const [isModal, setIsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const isModalOpen = () => {
    setIsModal((prevState) => !prevState);
    setEditModal(false);
  };

  return (
    <Container>
      <Product
        title={title}
        setEditModal={setEditModal}
        setIsModal={setIsModal}
      />
      <ButtonStyle onClick={isModalOpen}>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>

      <RecordDiaryModal
        isModalOpen={isModal}
        onClose={isModalOpen}
        category={category}
        categoryImage={categoryImage}
        item={editModal}
      />
    </Container>
  );
};

export default FoodList;
