import { useState } from 'react';
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
import { addWater } from '../../API/apiWater';

export const Modal = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState('');

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
            placeholder="Enter mililiters"
            value={waterAmount}
            onChange={handleInputChange}
          />
          <Confirm type="submit">Confirm</Confirm>
          <Cancel type="button" onClick={onClose}>
            Cancel
          </Cancel>
        </Form>
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

// Для сторінки, на якій відкривається модалка!!

// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);
// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);

// useEffect(() => {
//   const handleKeyPress = (event) => {
//     if (event.key === 'Escape' && isModalOpen) {
//       closeModal();
//     }
//   };

//   document.addEventListener('keydown', handleKeyPress);

//   return () => {
//     document.removeEventListener('keydown', handleKeyPress);
//   };
// }, [isModalOpen]);

{
  /* <button type='button' onClick={openModal}></button>
{isModalOpen && <Modal onClose={closeModal} />} */
}
