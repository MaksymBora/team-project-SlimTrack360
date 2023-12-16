import Icon from '../../common/Icon';
import { theme } from '../../../styles/index';

import {
  InfoTitle,
  DailyInfoCard,
  Title,
  InfoCardWrapper,
  InfoAmount,
  Span,
  InfoWrapper,
} from './DailyGoal.styled';

export const DailyGoal = () => {
  return (
    <div>
      <Title>Daily goal</Title>
      <DailyInfoCard>
        <InfoCardWrapper>
          <Icon
            name={'icon-bubble'}
            width={'80px'}
            height={'80px'}
            fill={`${theme.color.primaryLiteGreen}`}
          />
          <InfoWrapper>
            <InfoTitle>Calories</InfoTitle>
            <InfoAmount>1700</InfoAmount>
          </InfoWrapper>
          <Icon
            name={'icon-milk'}
            width={'80px'}
            height={'80px'}
            fill={`${theme.color.primaryViolet}`}
          />
          <InfoWrapper>
            <InfoTitle>Water</InfoTitle>
            <InfoAmount>
              1500<Span>ml</Span>
            </InfoAmount>
          </InfoWrapper>
        </InfoCardWrapper>
      </DailyInfoCard>
    </div>
  );
};
