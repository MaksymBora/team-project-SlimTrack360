import {
  UserName,
  UserAva,
  UserLogoContainer,
  UserLogoText,
  ProfileBtn,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import { ProfileModal } from './../../../HeaderModals/ProfileModal/ProfileModal.jsx';
import { useState } from 'react';
// import { useSelector } from 'react-redux/es/hooks/useSelector.js';
// import { selectUser } from '../../../../Redux/userAuth/selector.js';

export const UserAvatar = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const handleOpenModal = () => {
    setProfileModalOpen((prevState) => !prevState);
  };
  //  const user = useSelector(selectUser);
  //     const name = 'alex' ?? user.name;
  //    const avatar = {} ?? user.avatarURL;
  //   const defaultName = name ? name.slice(0, 1).toUpperCase() : 'A';
  //    const avatarUser = useSelector(selectAvatarurl);
  //     const ava = avatarUser.avatarURL;

  return (
    // name && (
    <UserLogoContainer onClick={handleOpenModal}>
      <UserName>Konstantin</UserName>

      <UserAva />

      <UserLogoText>
        <p> {}</p>
      </UserLogoText>

      <ProfileBtn>
        <svg>
          <use href={icon + '#icon-arrow-down'}></use>
        </svg>
      </ProfileBtn>
      {isProfileModalOpen && <ProfileModal onClose={handleOpenModal} />}
    </UserLogoContainer>
  );
  // )
};
