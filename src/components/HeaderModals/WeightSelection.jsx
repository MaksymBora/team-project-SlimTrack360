// import { useState } from 'react'
import icon from './../../assets/sprite.svg';
import {
  Modal,
  ModalWrapper,
  CloseBtn,
  Title,
  WeightDescription,
  DateWrapper,
  DateText,
  Date,
  Form,
  Input,
  ConfirmBtn,
  CancelBtn,
  Overlay,
} from './weightSelection.styled';
// import { useDispatch } from 'react-redux';

export const WeightSelectionModal = ({ onClose }) => {
  // const [newWeight, setNewWeight] = useState;
  // const dispatch = useDispatch()

  // const inputChange = e => {
  //     const { value } = e.target;
  //     setNewWeight(value)
  // }

  // function getCurrentDate() {
  //     const newDate = new Date()

  //     const year = newDate.getFullYear();

  //     const month =newDate.getMonth() + 1;

  //     const day = newDate.getDate();

  //     return `${day} ${month} ${year}`
  // }
  // const date = getCurrentDate()
  // console.log(date)

  return (
    <Overlay onClick={onClose}>
      <Modal>
        <CloseBtn type="button">
          <svg>
            <use href={icon + '#icon-close-circle'}></use>
          </svg>
        </CloseBtn>
        <ModalWrapper>
          <Title>Enter your current weight</Title>
          <WeightDescription>
            You can record your weight once a day
          </WeightDescription>
          <DateWrapper>
            <DateText>Today</DateText>
            <Date>555555</Date>
          </DateWrapper>

          <Form>
            <Input
              type="number"
              step="0.1"
              min="0"
              name="weight"
              placeholder="Enter your weight"
              autoComplete="off"
              //  onChange={inputChange}
              required
              autoFocus
            ></Input>
            <ConfirmBtn type="submit">Confirm</ConfirmBtn>
          </Form>
        </ModalWrapper>
        <CancelBtn type="button">Cancel</CancelBtn>
      </Modal>
    </Overlay>
  );
};
