import LoseFatMen from './../../../assets/images/goals/Lose fat image men.png';
import maintakeGirl from './../../../assets/images/goals/Maintake image men.png';
import muscles from './../../../assets/images/goals/Gain muscle.png';
import icon from './../../../assets/sprite.svg';
import {
  Modal,
  ModalWrapper,
  Title,
  ModalDescription,
  CloseBtn,
  Form,
  TargetInput,
  TargetImg,
  TargetImgBorder,
  TargetListBlock,
  ConfirmBtn,
  CancelBtn,
  Overlay,
  TargetSection,
} from './targetSelection.styled';

import { updateUserGoal } from './../../../Redux/userAuth/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const TargetSelection = ({ onClose }) => {
  const [selectedGoal, setSelectedGoal] = useState('Lose fat');

  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(selectedGoal);
    const data = {
      goal: selectedGoal,
    };
    console.log('cclick');
    dispatch(updateUserGoal(data));
    onClose();
  };

  const handleGoalChange = (goal) => {
    setSelectedGoal(goal);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn type="button" onClick={onClose}>
          <svg>
            <use href={icon + '#icon-close-circle'}></use>
          </svg>
        </CloseBtn>
        <ModalWrapper>
          <Title>Target Selection</Title>
          <ModalDescription>
            The service will adjust your calorie intake to your goal
          </ModalDescription>

          <Form onSubmit={handleOnSubmit}>
            <TargetSection>
              <TargetImgBorder
                style={{
                  border:
                    selectedGoal === 'Lose fat'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetInput
                  type="radio"
                  value="Lose fat"
                  id="lose_fat"
                  name="goal"
                  checked={!selectedGoal === 'Lose fat'}
                  onChange={() => handleGoalChange('Lose fat')}
                />
                <TargetImg src={LoseFatMen} alt="Lose fat image men" />
              </TargetImgBorder>

              <TargetListBlock
                style={{
                  color: selectedGoal === 'Lose fat' ? '#B6C3FF' : '#ffffff',
                }}
              >
                Lose fat
              </TargetListBlock>
            </TargetSection>

            <TargetSection>
              <TargetImgBorder
                style={{
                  border:
                    selectedGoal === 'Maintain'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetInput
                  type="radio"
                  value="Maintain"
                  id="maintain"
                  name="goal"
                  onChange={() => handleGoalChange('Maintain')}
                />
                <TargetImg src={maintakeGirl} alt="yoga" />
              </TargetImgBorder>

              <TargetListBlock
                style={{
                  color: selectedGoal === 'Maintain' ? '#B6C3FF' : '#ffffff',
                }}
              >
                Maintain
              </TargetListBlock>
            </TargetSection>

            <TargetSection>
              <TargetImgBorder
                style={{
                  border:
                    selectedGoal === 'Gain muscle'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetInput
                  type="radio"
                  name="goal"
                  id="gain_muscles"
                  value="Gain Muscle"
                  onChange={() => handleGoalChange('Gain Muscle')}
                />
                <TargetImg src={muscles} alt="muscles" />
              </TargetImgBorder>

              <TargetListBlock
                style={{
                  color: selectedGoal === 'Gain muscle' ? '#B6C3FF' : '#ffffff',
                }}
              >
                Gain Muscle
              </TargetListBlock>
            </TargetSection>

            <ConfirmBtn type="submit">Confirm</ConfirmBtn>
          </Form>
        </ModalWrapper>

        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>
  );
};
