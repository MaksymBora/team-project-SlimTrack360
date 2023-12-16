import { useSelector } from 'react-redux';
import { selectRecommended } from '../../../Redux/recommended/selectors';

import {
  FoodList,
  Image,
  Item,
  InnerItemWrap,
  FoodName,
  Amount,
  Text,
} from './List.styled';

const List = () => {
  const foodList = useSelector(selectRecommended);

  return (
    <FoodList>
      {foodList.map((item) => (
        <Item key={item._id}>
          <Image src={item.img} alt={item.name} />
          <div>
            <FoodName>{item.name}</FoodName>
            <InnerItemWrap>
              <Amount>{item.amount}</Amount>
              <Text> {item.calories} calories</Text>
            </InnerItemWrap>
          </div>
        </Item>
      ))}
    </FoodList>
  );
};

export default List;
