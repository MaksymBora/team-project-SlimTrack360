import ReactDOM from 'react-dom';
import {
  Cancel,
  Confirm,
  Content,
  Overlay,
  Question,
  Title,
} from '../ModalTakeWater/Modal.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/userAuth/operations';

export const ModalLogOut = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
  };
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>Log Out</Title>
        <Question>
          <h2>Do you want to log out?</h2>
          <Cancel type="button" onClick={handleLogOut}>
            LogOut
          </Cancel>
          <Confirm type="button" onClick={onClose}>
            Cancel
          </Confirm>
        </Question>
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
