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
import { useState } from 'react';

export const ModalTakeWater = ({ onClose }) => {
  const [waterValue, setWaterValue] = useState('');
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      date,
      value: Number(waterValue),
    };
    console.log(data);
    dispatch(addWater(data));
    onClose();
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>

        <Form onSubmit={handleOnSubmit}>
          <Label>How much water</Label>
          <Input
            name="water"
            type="text"
            placeholder="Enter milliliters"
            onChange={(e) => setWaterValue(e.target.value)}
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
