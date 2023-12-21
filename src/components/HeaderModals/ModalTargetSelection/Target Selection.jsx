import pic from './../../../assets/images/goals/Lose fat image men.png';
import pic_two from './../../../assets/images/goals/Maintake image men.png';
import pic_three from './../../../assets/images/goals/Gain muscle.png';
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
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../Redux/waterIntake/selector';

export const TargetSelection = ({ onClose }) => {
  const isLoading = useSelector(selectIsLoading);

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

          <Form>
            <TargetListBlock>
              <TargetList>
                <TargetImgBorder
                // style={{
                // border:
                // }}
                >
                  <TargetImg src={pic} alt="Lose fat image men"></TargetImg>
                </TargetImgBorder>
                <TargetImgText>Lose fat</TargetImgText>
              </TargetList>

              <TargetList>
                <TargetImgBorder>
                  <TargetImg src={pic_two} alt="yoga"></TargetImg>
                </TargetImgBorder>
                <TargetImgText>Maintain</TargetImgText>
              </TargetList>

              <TargetList>
                <TargetImgBorder>
                  <TargetImg src={pic_three} alt="muscles"></TargetImg>
                </TargetImgBorder>
                <TargetImgText>Gain Muscle</TargetImgText>
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
