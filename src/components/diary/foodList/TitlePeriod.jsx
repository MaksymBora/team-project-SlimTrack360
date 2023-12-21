import { useSelector } from 'react-redux';
import {
  PeriodContainer,
  Title,
  Span,
  ProteinAndFatContainer,
} from './TitlePeriod.styled';
import {
  getBreakfastCarbons,
  getDinnerCarbons,
  getBreakfastFat,
  getBreakfastProtein,
  getLunchCarbons,
  getSnackCarbons,
  getLunchFat,
  getDinnerFat,
  getSnackFat,
  getLunchProtein,
  getDinnerProtein,
  getSnackProtein,
} from '../../../Redux/foodIntake/selector';

const TitlePeriod = ({ title }) => {
  const breakfastCarbon = useSelector(getBreakfastCarbons);
  const breakfastFats = useSelector(getBreakfastFat);
  const breakfastProtein = useSelector(getBreakfastProtein);

  const lunchCarbon = useSelector(getLunchCarbons);
  const lunchFat = useSelector(getLunchFat);
  const lunchProteins = useSelector(getLunchProtein);

  const dinnerCarbon = useSelector(getDinnerCarbons);
  const dinnerFat = useSelector(getDinnerFat);
  const dinnerProtein = useSelector(getDinnerProtein);

  const snackCarbon = useSelector(getSnackCarbons);
  const snackFat = useSelector(getSnackFat);
  const snackProtein = useSelector(getSnackProtein);

  const returnCarbons = () => {
    if (title === 'Breakfast') {
      return breakfastCarbon;
    } else if (title === 'Lunch') {
      return lunchCarbon;
    } else if (title === 'Dinner') {
      return dinnerCarbon;
    } else if (title === 'Snack') {
      return snackCarbon;
    }
  };

  const returnFat = () => {
    if (title === 'Breakfast') {
      return breakfastFats;
    } else if (title === 'Lunch') {
      return lunchFat;
    } else if (title === 'Dinner') {
      return dinnerFat;
    } else if (title === 'Snack') {
      return snackFat;
    }
  };

  const returnProtein = () => {
    if (title === 'Breakfast') {
      return breakfastProtein;
    } else if (title === 'Lunch') {
      return lunchProteins;
    } else if (title === 'Dinner') {
      return dinnerProtein;
    } else if (title === 'Snack') {
      return snackProtein;
    }
  };

  return (
    <PeriodContainer>
      <Title>
        Carbonohidrates:
        <Span>{returnCarbons()}</Span>
      </Title>
      <ProteinAndFatContainer>
        <Title>
          Protein:<Span>{returnProtein()}</Span>
        </Title>
        <Title>
          Fat:<Span>{returnFat()}</Span>
        </Title>
      </ProteinAndFatContainer>
    </PeriodContainer>
  );
};

export default TitlePeriod;
