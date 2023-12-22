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
  FormWeight,
  Input,
  ConfirmBtn,
  CancelBtn,
  Overlay,
} from './weightSelection.styled';
import { useDispatch } from 'react-redux';
import { date } from './../../utils/dateToday';
// import { udpdateWeight } from './../../Redux/userAuth/operations';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { updateWeight } from '../../Redux/userAuth/operations';
import { selectCurrentWeight } from '../../Redux/userAuth/selector';

export const WeightSelectionModal = ({ onClose }) => {
  const userCurrentWeight = useSelector(selectCurrentWeight);
  const dispatch = useDispatch();

  const closeBtnHandler = ({ onClose }) => {
    console.log(onClose());
    onClose();
  };
  console.log(userCurrentWeight);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn type="button" onClick={onClose}>
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
              dispatch(updateWeight(data));
              resetForm();
            }}
          >
            <FormWeight>
              <Input name="currentWeight" placeholder="Enter your weight" />
              <ConfirmBtn type="submit">Confirm</ConfirmBtn>
            </FormWeight>
          </Formik>
        </ModalWrapper>
        <CancelBtn type="button" onClick={closeBtnHandler}>
          Cancel
        </CancelBtn>
      </Modal>
    </Overlay>
  );
};
