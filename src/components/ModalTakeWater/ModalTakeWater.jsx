import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../Redux/waterIntake/selector';
import ReactDOM from 'react-dom';
import {
  Cancel,
  Confirm,
  Content,
  Form,
  Input,
  Label,
  Overlay,
  Title,
} from './Modal.styled';
import { date } from '../../utils/dateToday';
import { addWater } from '../../Redux/waterIntake/operations';

export const ModalTakeWater = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setWaterAmount(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      date,
      value: waterAmount,
    };

    dispatch(addWater(data));
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>
        <Form onSubmit={handleOnSubmit}>
          <Label>How much water</Label>
          <Input
            type="text"
            placeholder="Enter milliliters"
            value={waterAmount}
            onChange={handleInputChange}
          />
          <Confirm type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Confirm'}
          </Confirm>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Cancel type="button" onClick={onClose}>
            Cancel
          </Cancel>
        </Form>
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
