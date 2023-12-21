import { Link } from 'react-router-dom';
import icon from './../../../assets/sprite.svg';
import {
  Overlay,
  Modal,
  ModalContainer,
  SettingButton,
} from './ProfileModal.styled';

export const ProfileModal = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal>
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
            <SettingButton type="button">
              <svg>
                <use href={icon + '#icon-logout'}></use>
              </svg>
              Log out
            </SettingButton>
          </Link>
        </ModalContainer>
      </Modal>
    </Overlay>
  );
};
