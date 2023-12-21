import { useState } from 'react';

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
import { useDispatch } from 'react-redux';
import { date } from './../../utils/dateToday';
import { udpdateWeight } from './../../Redux/userAuth/operations';

export const WeightSelectionModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newWeight, setNewWeight] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewWeight(value);
  };

  const handleNewUserWeight = (event) => {
    event.preventDefault();
    dispatch(udpdateWeight(newWeight));
    onClose();
  };

  const closeBtnHandler = () => {
    console.log(onClose());
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal>
        <CloseBtn type="button" onClose={closeBtnHandler}>
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
            <Date>{date}</Date>
          </DateWrapper>

          <Form onSubmit={handleNewUserWeight}>
            <Input
              type="number"
              step="0.1"
              min="0"
              name="weight"
              placeholder="Enter your weight"
              autoComplete="off"
              onChange={handleInputChange}
              required
              autoFocus
            />
            <ConfirmBtn type="submit">Confirm</ConfirmBtn>
          </Form>
        </ModalWrapper>
        <CancelBtn type="button" onClick={closeBtnHandler}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>
  );
};

//test
