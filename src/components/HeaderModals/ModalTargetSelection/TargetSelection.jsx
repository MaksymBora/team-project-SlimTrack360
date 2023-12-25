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
  TargetSection,
  ModalContainer,
} from './targetSelection.styled';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateUserGoal } from './../../../Redux/userAuth/operations';

export const TargetSelection = ({ onClose }) => {
  const [selectedGoal, setSelectedGoal] = useState('Lose Fat');

  console.log('target mounted');
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = {
      goal: selectedGoal,
    };

    dispatch(updateUserGoal(data));
    onClose();
  };

  const handleGoalChange = (goal) => {
    setSelectedGoal(goal);
  };

  return ReactDOM.createPortal(
    <Modal
      $height={document.body.clientHeight}
      onClick={(e) => {
        e.stopPropagation();
        if (e.currentTarget == e.target) {
          onClose();
        }
      }}
    >
      <ModalContainer>
        <ModalWrapper>
          <CloseBtn type="button" onClick={onClose}>
            <svg>
              <use href={icon + '#icon-close-circle'}></use>
            </svg>
          </CloseBtn>

          <Title>Target Selection</Title>
          <ModalDescription>
            The service will adjust your calorie intake to your goal
          </ModalDescription>

          <Form onSubmit={handleOnSubmit}>
            <TargetSection>
              <TargetImgBorder
                style={{
                  border:
                    selectedGoal === 'Lose Fat'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetInput
                  type="radio"
                  value="Lose Fat"
                  id="lose_fat"
                  name="goal"
                  checked={!selectedGoal === 'Lose Fat'}
                  onChange={() => handleGoalChange('Lose Fat')}
                />
                <TargetImg src={LoseFatMen} alt="Lose fat image men" />
              </TargetImgBorder>

              <TargetListBlock
                style={{
                  color: selectedGoal === 'Lose Fat' ? '#B6C3FF' : '#ffffff',
                }}
                htmlFor="lose_fat"
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
                htmlFor="maintain"
              >
                Maintain
              </TargetListBlock>
            </TargetSection>

            <TargetSection>
              <TargetImgBorder
                style={{
                  border:
                    selectedGoal === 'Gain Muscle'
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
                  color: selectedGoal === 'Gain Muscle' ? '#B6C3FF' : '#ffffff',
                }}
                htmlFor="gain_muscles"
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
      </ModalContainer>
    </Modal>,
    document.getElementById('modal-root')
  );
};
