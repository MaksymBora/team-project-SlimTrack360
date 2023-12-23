import { useState } from 'react';
import pic from './../../../assets/images/goals/Lose fat image men.png';
import png from './../../../assets/images/goals/Waight image.png';
import icon from './../../../assets/sprite.svg';
import { TargetSelection } from '../ModalTargetSelection/TargetSelection.jsx';
import { WeightSelectionModal } from '../WeightSelection.jsx';
import {
  Modal,
  CloseBtn,
  OptionBlock,
  Options,
  IconBlock,
  TextContainer,
  Goal,
  GoalIcon,
  Overlay,
  InfoBlockText,
  Kg,
} from './menuModal.styled';

export const ModalMenu = ({ onClose }) => {
  const [showModalTarget, setShowModalTarget] = useState(false);
  const [showModalWeight, setShowModalWeight] = useState(false);

  const handleOpenModalTarget = () => {
    setShowModalTarget((showModalTarget) => !showModalTarget);
  };

  const handleOpenModalWeight = () => {
    setShowModalWeight((showModalWeight) => !showModalWeight);
  };

  const handleSwitchTarget = () => {
    onClose();
    setShowModalTarget((showModalTarget) => !showModalTarget);
  };

  const handleSwitchWeight = () => {
    onClose();
    setShowModalWeight((showModalWeight) => !showModalWeight);
  };

  const handleCloseBtn = () => {
    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <Modal>
        <CloseBtn onClick={handleCloseBtn}>
          <svg>
            <use href={icon + '#icon-close-circle'}></use>
          </svg>
        </CloseBtn>

        <Options>
          <OptionBlock onClick={handleSwitchTarget}>
            <IconBlock>
              <img src={pic} alt="Lose fat image men"></img>
            </IconBlock>
            <TextContainer>
              <Goal>Goal</Goal>
              <InfoBlockText>
                Lose fat
                <GoalIcon>
                  <svg>
                    <use href={icon + '#icon-arrowright'}></use>
                  </svg>
                </GoalIcon>
              </InfoBlockText>
            </TextContainer>
            {showModalTarget && (
              <TargetSelection onCloseModal={handleOpenModalTarget} />
            )}
          </OptionBlock>

          <OptionBlock onClick={handleSwitchWeight}>
            <IconBlock>
              <img src={png} alt="weight" />
            </IconBlock>
            <TextContainer>
              <Goal>Weight</Goal>
              <InfoBlockText>
                65
                <Kg> kg</Kg>
                <GoalIcon>
                  <svg>
                    <use href={icon + '#icon-edit-weight'}></use>
                  </svg>
                </GoalIcon>
              </InfoBlockText>
            </TextContainer>
            {showModalWeight && (
              <WeightSelectionModal onCloseModal={handleOpenModalWeight} />
            )}
          </OptionBlock>
        </Options>
      </Modal>
    </Overlay>
  );
};
