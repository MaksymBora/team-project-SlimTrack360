import { Image, InnerItemWrap, FoodName, Amount, Text } from './Item.styled';

const ItemFood = ({ item }) => {
  return (
    <>
      <Image src={item.img} alt={item.name} />
      <div>
        <FoodName>{item.name}</FoodName>
        <InnerItemWrap>
          <Amount>{item.amount}</Amount>
          <Text> {item.calories} calories</Text>
        </InnerItemWrap>
      </div>
    </>
  );
};

export default ItemFood;
