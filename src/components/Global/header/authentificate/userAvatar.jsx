import {
  UserName,
  UserAva,
  UserLogoContainer,
  UserLogoText,
  UserLogoIcon,
  ProfileBtn,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import { ProfileModal } from './../../../HeaderModals/ProfileModal/ProfileModal.jsx';
import { useState } from 'react';

export const UserAvatar = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const handleOpenModal = () => {
    setProfileModalOpen((prevState) => !prevState);
  };

  //      const userProfile = useSelector(currentUserEmailSelector);
  //   const name = 'alex' ?? userProfile.userName;
  //   const avatar = {} ?? userProfile.avatarURL;
  //   const defaultName = name ? name.slice(0, 1).toUpperCase() : 'A';
  //   const avatarUser = useSelector(currentUserAvatar);
  //   const ava = avatarUser.avatarURL;
  //

  return (
    // name && (
    <UserLogoContainer onClick={handleOpenModal}>
      <UserName>Konstantin</UserName>

      {/* {ava ? ( */}
      <UserAva
      // src={ava} alt="Avatar"
      />
      {/* ) : ( */}
      <UserLogoText>
        <p>{/* {defaultName} */}</p>
      </UserLogoText>
      {/* 
                )
            } */}

      <UserLogoIcon>
        <svg>
          <use href={icon + '#icon-arrow-down'}></use>
        </svg>
      </UserLogoIcon>

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
