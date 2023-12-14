import {
  ButtonStyle,
  TextIndexSpan,
} from '../../../Pages/Diary/DiaryPage.styled';
import { Container } from './FoodList.styled';
import Product from '../meal/Product';

const FoodList = () => {
  return (
    <Container>
      <Product />
      <ButtonStyle>
        <TextIndexSpan>+ Record your meal</TextIndexSpan>
      </ButtonStyle>
      {/* {isModalOpen && (
        <RecordDiaryModal
          type={type}
          onClose={closeModal}
          onSubmit={data => {
            dispatch(postFoodIntake({ type, product: data }));
            handleDataUpdate();
          }}
        />
      )} */}
    </Container>
  );
};

export default FoodList;
