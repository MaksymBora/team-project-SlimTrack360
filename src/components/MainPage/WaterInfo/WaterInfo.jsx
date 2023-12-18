import { useState, useEffect } from 'react';
import { theme } from '../../../styles/index';
import {
  WaterInfoCard,
  WaterTitle,
  InfoNumber,
  Span,
  InfoWrap,
  Level,
  InfoTitle,
  LeftInfo,
  LeftNumber,
  Button,
  ButtonTrash,
  ValueWrap,
  Bar,
  Percentage,
} from './WaterInfo.styled';

import Icon from '../../common/Icon';

import { WaterChart } from '../WaterChart/WaterChart';

import { Modal } from '../../ModalTakeWater/ModalTakeWater';

let waterConsumtion = 1000; // редакс води waterIntake
let waterGoal = 1500; /// редакс води waterIntake
const leftWaterIntake = waterGoal - waterConsumtion;

const waterPercent =
  waterConsumtion <= 1500 ? Math.round((waterConsumtion * 100) / 1500) : 100;

const offset =
  waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;
const changedColor = waterPercent <= 84 ? 'rgba(182, 195, 255, 1)' : 'green';

export const WaterInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen]);

  return (
    <div>
      <WaterTitle>Water</WaterTitle>
      <WaterInfoCard>
        <Level>
          <Bar>
            <Percentage $changedColor={changedColor} $offset={offset}>
              {`${waterPercent}%`}
            </Percentage>
            <WaterChart waterIntake={waterPercent} />
          </Bar>
        </Level>
        <InfoWrap>
          <InfoTitle>Water consumption</InfoTitle>
          <ValueWrap>
            <InfoNumber>
              {waterConsumtion}
              <Span>ml</Span>
            </InfoNumber>
            <LeftInfo>
              left:
              <LeftNumber>
                {leftWaterIntake > 0 ? leftWaterIntake : 0}
              </LeftNumber>
              <Span>ml</Span>
            </LeftInfo>
          </ValueWrap>
          <Button type="button" onClick={openModal}>
            <Icon name={'icon-add-converted'} width={'16px'} height={'16px'} />
            Add water intake
          </Button>
          {isModalOpen && <Modal onClose={closeModal} />}
          <ButtonTrash>
            <Icon
              name={'icon-trash-03'}
              width={'20px'}
              height={'20px'}
              fill={`${theme.color.primaryLiteGreen}`}
            />
          </ButtonTrash>
        </InfoWrap>
      </WaterInfoCard>
    </div>
  );
};
