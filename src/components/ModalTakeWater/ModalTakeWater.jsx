import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { addWater } from '../../Redux/waterIntake/operations';

export const ModalTakeWater = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState('');
  // const value = useSelector(selectValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleInputChange = (e) => {
    setWaterAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = parseFloat(waterAmount);

    if (!isNaN(value)) {
      const data = {
        date: new Date().toISOString(),
        water: value,
      };

      addWater(value);

      console.log(data);
      onClose();
    } else {
      console.error('Input is not a number');
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>Add water intake</Title>
        <Form onSubmit={handleSubmit}>
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
