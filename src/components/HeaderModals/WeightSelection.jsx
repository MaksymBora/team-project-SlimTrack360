// import { useState } from 'react';
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
  // Form,
  // Input,
  // ConfirmBtn,
  CancelBtn,
  Overlay,
} from './weightSelection.styled';
// import { useDispatch } from 'react-redux';
import { date } from './../../utils/dateToday';
// import { udpdateWeight } from './../../Redux/userAuth/operations';
import { Field, Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
// import { updateWeight } from '../../Redux/userAuth/operations';
import { selectCurrentWeight } from '../../Redux/userAuth/selector';

export const WeightSelectionModal = ({ onClose }) => {
  const userCurrentWeight = useSelector(selectCurrentWeight);
  // const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const [newWeight, setNewWeight] = useState('');

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setNewWeight(value);
  // };

  // const handleNewUserWeight = (event) => {
  //   event.preventDefault();
  //   dispatch(udpdateWeight(newWeight));
  //   onClose();
  // };

  const closeBtnHandler = () => {
    console.log(onClose());
    onClose();
  };
  console.log(userCurrentWeight);
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
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

          <Formik
            initialValues={{ currentWeight: userCurrentWeight }}
            onSubmit={(values, { resetForm }) => {
              const data = {
                date,
                currentWeight: Number(values.currentWeight),
              };
              console.log(data);
              // dispatch(updateWeight(data));
              resetForm();
            }}
          >
            <Form>
              <Field name="currentWeight" placeholder="Enter your weight" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>

          {/* <Form onSubmit={handleNewUserWeight}>
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
          </Form> */}
        </ModalWrapper>
        <CancelBtn type="button" onClick={closeBtnHandler}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>
  );
};
