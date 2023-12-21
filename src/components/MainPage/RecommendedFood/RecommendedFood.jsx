import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Loader } from '../../../utils/Loader';

import {
  selectFourItems,
  selectIsLoading,
  selectError,
} from '../../../Redux/recommended/selectors';
import { theme } from '../../../styles/theme';
import {
  PageName,
  FoodList,
  Item,
  ButtonText,
  Button,
} from './RecommendedFood.styled';
import ItemFood from '../../Recommended/Item/Item';
import Icon from '../../common/Icon';

const RecommendedFood = () => {
  const foodList = useSelector(selectFourItems);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const isMobile = useMediaQuery({ maxWidth: 833 });

  const visibleItems = isMobile ? 2 : 4;

  return (
    <div>
      <PageName>Recommended food</PageName>
      {isLoading && <Loader />}
      {!isError ? (
        <FoodList>
          {foodList.slice(0, visibleItems).map((item) => (
            <Item key={item._id}>
              <ItemFood item={item} />
            </Item>
          ))}
        </FoodList>
      ) : (
        <p>Oops...something went wrong! Try again later</p>
      )}

      <Button to={'/recommended-food'}>
        <ButtonText>See more</ButtonText>
        <Icon
          name={'icon-arrowright'}
          width={'16px'}
          height={'16px'}
          fill={`${theme.color.primaryGrey}`}
        />
      </Button>
    </div>
  );
};

export default RecommendedFood;
