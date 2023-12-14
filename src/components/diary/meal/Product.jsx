import {
  ProductContainer,
  Text,
  SpanElement,
  ProductName,
  ProductPower,
  ProductTitleContainer,
  EditButton,
  Paragraph,
} from '../meal/Product.styled';
import Icon from '../../common/Icon';
// import {theme} from '../../../styles/theme'

const Product = () => {
  return (
    <>
      <ProductContainer>
        <ProductTitleContainer>
          <Paragraph>index+1</Paragraph>
          <ProductName>name</ProductName>
        </ProductTitleContainer>

        <ProductPower>
          <Text>
            <SpanElement>Carb. </SpanElement>0
          </Text>
          <Text>
            <SpanElement>Prot. </SpanElement>0
          </Text>
          <Text>
            <SpanElement>Fat. </SpanElement>0
          </Text>
        </ProductPower>
        <EditButton>
          <Icon
            name={'icon-edit-2'}
            width={'16px'}
            height={'16px'}
            fill={'#B6B6B6'}
          />
          Edit svg
        </EditButton>
      </ProductContainer>
    </>
  );
};

export default Product;
