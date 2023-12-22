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

export const DiaryInfo = () => {
  const carbonohidrates = 60;
  const protein = 40;
  const fat = 20;

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
          carbonohidrates={carbonohidrates}
          protein={protein}
          fat={fat}
        />
        <DiaryCard
          category={'Lunch'}
          categoryImage={lunch}
          categoryImage2x={lunch2x}
          carbonohidrates={carbonohidrates}
          protein={protein}
          fat={fat}
        />
        <DiaryCard
          category={'Dinner'}
          categoryImage={dinner}
          categoryImage2x={dinner2x}
          carbonohidrates={carbonohidrates}
          protein={protein}
          fat={fat}
        />
        <DiaryCard
          category={'Snack'}
          categoryImage={snack}
          categoryImage2x={snack2x}
          carbonohidrates={carbonohidrates}
          protein={protein}
          fat={fat}
          title={'Breakfast'}
          image={breakfast}
          image2x={breakfast2x}
        />
        <DiaryCard title={'Lunch'} image={lunch} image2x={lunch2x} />
        <DiaryCard title={'Dinner'} image={dinner} image2x={dinner2x} />
        <DiaryCard title={'Snack'} image={snack} image2x={snack2x} />
      </CardsWrap>
    </DiaryWrap>
  );
};
