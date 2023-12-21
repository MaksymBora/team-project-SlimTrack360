import Icon from '../../common/Icon';
import { getFoodIntake } from '../../../Redux/foodIntake/selector';
import { useSelector } from 'react-redux';
import {
  ProductContainer,
  Text,
  SpanElement,
  ProductName,
  ProductPower,
  ProductTitleContainer,
  EditButton,
  Paragraph,
} from './Product.styled';

const Product = ({ title, setEditModal, setIsModal }) => {
  const {
    breakfast: { products: breakfastProducts },
    lunch: { products: lunchProducts },
    dinner: { products: dinnerProducts },
    snack: { products: snackProducts },
  } = useSelector(getFoodIntake);

  const dailyProducts =
    title === 'Lunch'
      ? lunchProducts
      : title === 'Breakfast'
        ? breakfastProducts
        : title === 'Dinner'
          ? dinnerProducts
          : title === 'Snack'
            ? snackProducts
            : [];

  const isModalOpen = () => {
    setIsModal((prevState) => !prevState);
    setEditModal(true);
  };

  return (
    <>
      <ProductContainer>
        <ProductTitleContainer>
          {dailyProducts.map((item, index) => {
            return (
              <div key={item.productId}>
                <Paragraph>{index + 1}</Paragraph>
                <ProductName>{item.name}</ProductName>
                <ProductPower>
                  <Text>
                    <SpanElement>Carb. </SpanElement>
                    {item.carbonohidretes}
                  </Text>
                  <Text>
                    <SpanElement>Prot. </SpanElement>
                    {item.protein}
                  </Text>
                  <Text>
                    <SpanElement>Fat. </SpanElement>
                    {item.fat}
                  </Text>
                </ProductPower>
              </div>
            );
          })}
        </ProductTitleContainer>
        <EditButton onClick={isModalOpen}>
          <Icon
            name={'icon-edit-2'}
            width={'16px'}
            height={'16px'}
            fill={'#B6B6B6'}
          />
          Edit
        </EditButton>
      </ProductContainer>
    </>
  );
};

export default Product;
