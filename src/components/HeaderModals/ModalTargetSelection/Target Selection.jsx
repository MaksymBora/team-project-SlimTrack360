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
  TargetList,
  TargetImg,
  TargetImgBorder,
  TargetImgText,
  TargetListBlock,
  ConfirmBtn,
  CancelBtn,
  Overlay,
} from './targetSelection.styled';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from '../../../Redux/waterIntake/selector';
import { selectUser } from './../../../Redux/userAuth/selector';
import { useState } from 'react';
import { updateUserGoal } from './../../../Redux/userAuth/operations';

export const TargetSelection = ({ onClose }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  // const userSex = user.sex
  const currentGoal = user.goal;
  const [userGoal, setUserGoal] = useState(currentGoal);

  const newLosefatGoal = () => setUserGoal('Lose fat');
  const newMaintainGoal = () => setUserGoal('Maintain');
  const newGailMuscleGoal = () => setUserGoal('Gain muscle');

  const handleNewGoal = (event) => {
    event.preventDefault();
    dispatch(updateUserGoal(userGoal));
    onClose();
  };

  return ReactDOM.createPortal(
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
          <Form onSubmit={handleNewGoal}>
            <TargetListBlock>
              <TargetImgBorder
                style={{
                  border:
                    userGoal === 'Lose fat'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetList
                  type="radio"
                  value="Lose fat"
                  onChange={newLosefatGoal}
                />
                <TargetImg src={LoseFatMen} alt="Lose fat image men" />
              </TargetImgBorder>
              <TargetImgText
                style={{
                  color: userGoal === 'Lose fat' ? '#B6C3FF' : '#B6B6B6',
                }}
              >
                Lose fat
              </TargetImgText>
            </TargetListBlock>

            <TargetListBlock>
              <TargetImgBorder
                style={{
                  border:
                    userGoal === 'Maintain'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetList
                  type="radio"
                  value="Maintain"
                  onChange={newMaintainGoal}
                />
                <TargetImg src={maintakeGirl} alt="yoga" />
              </TargetImgBorder>

              <TargetImgText
                style={{
                  color: userGoal === 'Maintain' ? '#B6C3FF' : '#B6B6B6',
                }}
              >
                Maintain
              </TargetImgText>
            </TargetListBlock>

            <TargetListBlock>
              <TargetImgBorder
                style={{
                  border:
                    userGoal === 'Gain muscle'
                      ? '2px solid #B6C3FF'
                      : '1px solid #B6B6B6',
                }}
              >
                <TargetList
                  type="radio"
                  value="muscles"
                  onChange={newGailMuscleGoal}
                />
                <TargetImg src={muscles} alt="muscles" />
              </TargetImgBorder>

              <TargetImgText
                style={{
                  color: userGoal === 'Gain muscle' ? '#B6C3FF' : '#B6B6B6',
                }}
              >
                Gain Muscle
              </TargetImgText>
            </TargetListBlock>

            <ConfirmBtn type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Confirm'}
            </ConfirmBtn>
          </Form>
        </ModalWrapper>

        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

// let takeGoal;

// switch (user.sex) {
//   case 'Female':
//     switch (user.goal) {
//       case 'Lose fat':
//         takeGoal = LoseFatMen;
//         break;

//       case 'Maintain':
//         takeGoal = maintakeGirl;
//         break;

//       default:
//         takeGoal = muscles;
//     }
//     break;

//   case 'Male':
//     switch (user.goal) {
//       case 'Lose fat':
//         takeGoal = LoseFatMen;
//         break;

//       case 'Maintain':
//         takeGoal = maintakeGirl;
//         break;

//       default:
//        takeGoal =muscles;
//     }
//     break;

//   default:
//     takeGoal = muscles;
// }
