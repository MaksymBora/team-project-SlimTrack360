import { Link } from 'react-router-dom';
import icon from './../../../assets/sprite.svg';
import { Modal, ModalContainer, SettingButton } from './ProfileModal.styled';
import { useState } from 'react';
import { ModalLogOut } from '../../modalLogOut/modalLogOut';

export const ProfileModal = ({ onClose }) => {
  const [isModalLogOut, setIsModalLogOut] = useState(false);
  const handleOpenModal = () => {
    setIsModalLogOut((prevState) => !prevState);
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

        <Link to={'/'}>
          <SettingButton type="button" onClick={handleOpenModal}>
            <svg>
              <use href={icon + '#icon-logout'}></use>
            </svg>
            Log out
          </SettingButton>
        </Link>
        {isModalLogOut && <ModalLogOut onClose={handleOpenModal} />}
      </ModalContainer>
    </Modal>
  );
};
