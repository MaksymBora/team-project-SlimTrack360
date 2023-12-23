import { DiaryCard } from './DiaryCard/DiaryCard';
import {
  CardsWrap,
  DiaryLink,
  Title,
  TitleWrapper,
  DiaryWrap,
} from './DiaryInfo.styled';

import breakfast from '../../../assets/images/diary/breakfast.png';
import breakfast2x from '../../../assets/images/diary/breakfast-2x.png';
import dinner from '../../../assets/images/diary/dinner.png';
import dinner2x from '../../../assets/images/diary/dinner-2x.png';
import lunch from '../../../assets/images/diary/lunch.png';
import lunch2x from '../../../assets/images/diary/lunch-2x.png';
import snack from '../../../assets/images/diary/snack.png';
import snack2x from '../../../assets/images/diary/snack-2x.png';
import { useSelector } from 'react-redux';
import {
  getBreakfastCarbons,
  getBreakfastFat,
  getBreakfastProtein,
  getDinnerCarbons,
  getDinnerFat,
  getDinnerProtein,
  getFoodIntake,
  getFoodIntakeId,
  getLunchCarbons,
  getLunchFat,
  getLunchProtein,
  getSnackCarbons,
  getSnackFat,
  getSnackProtein,
} from '../../../Redux/foodIntake/selector';

export const DiaryInfo = () => {
  const breakfastCarbons = useSelector(getBreakfastCarbons);
  const breakfastFat = useSelector(getBreakfastFat);
  const breakfastProtein = useSelector(getBreakfastProtein);

  const lunchfastCarbons = useSelector(getLunchCarbons);
  const lunchfastFat = useSelector(getLunchFat);
  const lunchfastProtein = useSelector(getLunchProtein);

  const dinnerfastCarbons = useSelector(getDinnerCarbons);
  const dinnerfastFat = useSelector(getDinnerFat);
  const dinnerfastProtein = useSelector(getDinnerProtein);

  const snackfastCarbons = useSelector(getSnackCarbons);
  const snackfastFat = useSelector(getSnackFat);
  const snackfastProtein = useSelector(getSnackProtein);

  const foodIntakeId = useSelector(getFoodIntakeId);
  const foodIntake = useSelector(getFoodIntake);

  const isBreakfast = foodIntake.breakfast.products.length;
  const isLunch = foodIntake.lunch.products.length;
  const isDinner = foodIntake.dinner.products.length;
  const isSnack = foodIntake.snack.products.length;

  return (
    <DiaryWrap>
      <TitleWrapper>
        <Title>Diary</Title>
        <DiaryLink to="/diary">See more</DiaryLink>
      </TitleWrapper>
      <CardsWrap>
        <DiaryCard
          category={'Breakfast'}
          categoryImage={breakfast}
          categoryImage2x={breakfast2x}
          carbonohidrates={breakfastCarbons}
          protein={breakfastProtein}
          fat={breakfastFat}
          id={foodIntakeId}
          dataLength={isBreakfast}
        />
        <DiaryCard
          category={'Lunch'}
          categoryImage={lunch}
          categoryImage2x={lunch2x}
          carbonohidrates={lunchfastCarbons}
          protein={lunchfastProtein}
          fat={lunchfastFat}
          id={foodIntakeId}
          dataLength={isLunch}
        />
        <DiaryCard
          category={'Dinner'}
          categoryImage={dinner}
          categoryImage2x={dinner2x}
          carbonohidrates={dinnerfastCarbons}
          protein={dinnerfastProtein}
          fat={dinnerfastFat}
          id={foodIntakeId}
          dataLength={isDinner}
        />
        <DiaryCard
          category={'Snack'}
          categoryImage={snack}
          categoryImage2x={snack2x}
          carbonohidrates={snackfastCarbons}
          protein={snackfastProtein}
          fat={snackfastFat}
          title={'Snack'}
          image={breakfast}
          image2x={breakfast2x}
          id={foodIntakeId}
          dataLength={isSnack}
        />
        {/* <DiaryCard title={'Lunch'} image={lunch} image2x={lunch2x} />
        <DiaryCard title={'Dinner'} image={dinner} image2x={dinner2x} />
        <DiaryCard title={'Snack'} image={snack} image2x={snack2x} /> */}
      </CardsWrap>
    </DiaryWrap>
  );
};
