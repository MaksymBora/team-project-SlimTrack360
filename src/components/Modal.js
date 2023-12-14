import { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  width: 834px;
  height: 1294px;
  background: rgba(5, 5, 5, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
  @media screen and (min-width: 768px) {
    width: 834px;
    height: 1294px;
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 697px;
    top: 103px;
  }
`;
export const Content = styled.div`
  width: 300px;
  height: 266px;
  top: 100px;
  left: 10px;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 338px;
    height: 280px;
    top: 180px;
    left: 248px;
  }
  @media screen and (min-width: 1440px) {
    top: 215px;
    left: 551px;
  }
`;
export const Form = styled.form`
width: Hug (276px);
height: Hug (226px);
top: 116px;
left: 22px;
gap: 24px;
@media screen and (min-width: 768px){
  width: Hug (258px);
  height: Hug (232px);
  top: 204px;
  left: 288px;
 }
@media screen and (min-width: 1440px){
  top: 239px
  left: 591px
  }
`;
export const Label = styled.label`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Input = styled.input`
  width: Hug (212px);
  height: Hug (36px);
  padding: 8px, 10px, 8px, 10px;
  border-radius: 12px;
  border: 1px;
  gap: 10px;
`;
export const Confirm = styled.button`
width: Hug (212px)
height: Hug (36px)
padding: 8px, 10px, 8px, 10px
border-radius: 12px
gap: 10px
color: rgba(227, 255, 168, 1)`;
export const Cancel = styled.button`;`;

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
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <h2>Add water intake</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            How much water
            <Input
              type="text"
              placeholder="Enter mililiters"
              value={waterAmount}
              onChange={handleInputChange}
            />
          </Label>
          <Confirm type="submit">Confirm</Confirm>
        </Form>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
