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
    </Container>
  );
};

export default FoodList;
