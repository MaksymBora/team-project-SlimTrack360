import { useMediaQuery } from 'react-responsive';
import {
  UserMode,
  UserSet,
  Pictogram,
  SelectGoals,
  GoalPic,
  GoalSelection,
  Goal,
  LoseFat,
  GoalBtn,
  SettingBtn,
  SelectWeight,
  WeightPic,
  WeightSelection,
  Weight,
  SetBtn,
  NumKg,
  Kg,
  WeightBtn,
  PictogramBlock,
  PictogramOpen,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import pict from './../../../../assets/images/goals/Lose fat image men.png';
import png from './../../../../assets/images/goals/Waight image.png';
import { useState } from 'react';
import { TargetSelection } from '../../../HeaderModals/ModalTargetSelection/TargetSelection.jsx';
import { WeightSelectionModal } from '../../../HeaderModals/WeightSelection.jsx';
import { ModalMenu } from './../../../HeaderModals/menuModal/menuModal.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from './../../../../Redux/userAuth/selector.js';

export const UserSettings = () => {
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  const [isModalOpenGoal, setIsModalOpenGoal] = useState(false);
  const [isModalOpenWeight, setIsModalOpenWeight] = useState(false);
  const [isModalOpenMenu, setIsModalOpenMenu] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpenGoal((prevState) => !prevState);
  };

  const handleOpenModalWeight = () => {
    setIsModalOpenWeight((prevState) => !prevState);
  };

  const handleOpenModalMenu = () => {
    setIsModalOpenMenu((prevState) => !prevState);
  };

  const user = useSelector(selectUser);

  return (
    <UserMode>
      {isMobile ? (
        // first
        <PictogramBlock onClick={handleOpenModalMenu}>
          {isModalOpenMenu ? (
            <Pictogram>
              <svg>
                <use href={icon + '#icon-menu'}></use>
              </svg>
            </Pictogram>
          ) : (
            <PictogramOpen>
              <svg>
                <use href={icon + '#icon-menu'}></use>
              </svg>
            </PictogramOpen>
          )}
          {isModalOpenMenu && <ModalMenu onClose={handleOpenModalMenu} />}
        </PictogramBlock>
      ) : (
        <UserSet>
          <SelectGoals>
            <GoalPic>
              <img src={pict} alt="running man" />
            </GoalPic>

            <GoalSelection>
              <Goal>Goal</Goal>

              <SettingBtn>
                <LoseFat>{user.goal || 'No goal'}</LoseFat>

                <GoalBtn type="button" onClick={handleOpenModal}>
                  <svg>
                    <use href={icon + '#icon-arrow-down'}></use>
                  </svg>
                </GoalBtn>
              </SettingBtn>
            </GoalSelection>
          </SelectGoals>
          {isModalOpenGoal && <TargetSelection onClose={handleOpenModal} />}

          <SelectWeight>
            <WeightPic>
              <img src={png} alt="weight" />
            </WeightPic>

            <WeightSelection>
              <Weight>Weight</Weight>
              <SetBtn>
                <NumKg>
                  {user.currentWeight || 0}
                  <Kg>kg</Kg>
                </NumKg>
                <WeightBtn type="button" onClick={handleOpenModalWeight}>
                  <svg>
                    <use href={icon + '#icon-edit-weight'}></use>
                  </svg>
                </WeightBtn>
              </SetBtn>
            </WeightSelection>
          </SelectWeight>
          {isModalOpenWeight && (
            <WeightSelectionModal onClose={handleOpenModalWeight} />
          )}
        </UserSet>
      )}
    </UserMode>
  );
};
