import { Link } from 'react-router-dom';
import icon from './../../../assets/sprite.svg';
import { Modal, ModalContainer, SettingButton } from './ProfileModal.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../Redux/userAuth/operations';

export const ProfileModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
  };

  return (
    <Modal onClick={(e) => e.stopPropagation()}>
      <ModalContainer>
        <Link onClick={onClose} to={'/settings'}>
          <SettingButton type="button">
            <svg>
              <use href={icon + '#icon-setting-2'}></use>
            </svg>
            Setting
          </SettingButton>
        </Link>

        <Link onClick={onClose} to={'/'}>
          <SettingButton onClick={handleLogOut}>
            <svg>
              <use href={icon + '#icon-logout'}></use>
            </svg>
            Log out
          </SettingButton>
        </Link>
      </ModalContainer>
    </Modal>
  );
};
