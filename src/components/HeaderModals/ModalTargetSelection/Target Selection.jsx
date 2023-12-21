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
    // onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal>
        <CloseBtn type="button">
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
              <TargetList onClick={newLosefatGoal}>
                <TargetImgBorder
                  style={{
                    border:
                      userGoal === 'Lose fat'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg
                    src={LoseFatMen}
                    alt="Lose fat image men"
                  ></TargetImg>
                </TargetImgBorder>
                <TargetImgText
                  style={{
                    color: userGoal === 'Lose fat' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Lose fat
                </TargetImgText>
              </TargetList>

              <TargetList onClick={newMaintainGoal}>
                <TargetImgBorder
                  style={{
                    border:
                      userGoal === 'Maintain'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg src={maintakeGirl} alt="yoga"></TargetImg>
                </TargetImgBorder>
                <TargetImgText
                  style={{
                    color: userGoal === 'Maintain' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Maintain
                </TargetImgText>
              </TargetList>

              <TargetList onClick={newGailMuscleGoal}>
                <TargetImgBorder
                  style={{
                    border:
                      userGoal === 'Gain muscle'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg src={muscles} alt="muscles"></TargetImg>
                </TargetImgBorder>
                <TargetImgText
                  style={{
                    color: userGoal === 'Gain muscle' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Gain Muscle
                </TargetImgText>
              </TargetList>
            </TargetListBlock>
            <ConfirmBtn
              type="submit"
              disabled={isLoading ? 'Loading' : 'Confirm'}
            >
              Confirm
            </ConfirmBtn>
          </Form>
        </ModalWrapper>

        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>
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
