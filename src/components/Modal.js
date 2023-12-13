import { useState } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ onClose }) => {
  const [waterAmount, setWaterAmount] = useState('');
  const handleInputChange = (e) => {
    setWaterAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут має бути магія
    console.log(`Confirm: ${waterAmount} ml water`);
    onClose();
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
