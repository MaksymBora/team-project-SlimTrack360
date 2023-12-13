import { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export const Modal = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState('');
  const handleInputChange = (e) => {
    setWaterAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'потрібний ендпоінт',
        {
          waterAmount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log(`Confirm: ${waterAmount} ml water`);
        onClose();
      } else {
        console.error('Error sending data to server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add water intake</h2>
        <form onSubmit={handleSubmit}>
          <label>
            How much water
            <input
              type="text"
              placeholder="Enter mililiters"
              value={waterAmount}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Confirm</button>
        </form>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
