import {
  UserName,
  UserAva,
  UserLogoContainer,
  UserLogoText,
  ProfileBtn,
} from './../header.styled.js';
import icon from './../../../../assets/sprite.svg';
import { ProfileModal } from './../../../HeaderModals/ProfileModal/ProfileModal.jsx';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../Redux/userAuth/selector.js';
import { selectAvatarurl } from '../../../../Redux/userAuth/selector.js';

export const UserAvatar = ({ isProfileModalOpen, handleOpenModalProfile }) => {
  const user = useSelector(selectUser);

  let avatar = useSelector(selectAvatarurl);
  const defaultName = user.name ? user.name.slice(0, 1).toUpperCase() : 'A';

  return (
    // name && (
    <UserLogoContainer onClick={handleOpenModalProfile}>
      <UserName>
        <p>{user.name}</p>
      </UserName>
      {avatar ? (
        <UserAva $isDefault={false}>
          <img alt="avatar" src={avatar} />
        </UserAva>
      ) : (
        <UserAva $isDefault={true}>
          <UserLogoText>{defaultName}</UserLogoText>
        </UserAva>
      )}

      <ProfileBtn>
        <svg>
          <use href={icon + '#icon-arrow-down'}></use>
        </svg>
      </ProfileBtn>
      {isProfileModalOpen && <ProfileModal onClose={handleOpenModalProfile} />}
    </UserLogoContainer>
  );
  // )
};
