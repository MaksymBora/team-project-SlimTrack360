import { useSelector } from 'react-redux';
import { selectTenItems } from '../../../Redux/recommended/selectors';

import { FoodList, Item } from './List.styled';
import ItemFood from '../Item/Item';

const List = () => {
  const foodList = useSelector(selectTenItems);

  return (
    <FoodList>
      {foodList.map((item) => (
        <Item key={item._id}>
          <ItemFood item={item} />
        </Item>
      ))}
    </FoodList>
  );
};

export default List;
