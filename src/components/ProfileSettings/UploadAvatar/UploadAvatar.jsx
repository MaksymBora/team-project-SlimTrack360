import { useRef, useState } from 'react';
import {
  AvatarBox,
  OriginalFilePicker,
  PickButton,
  UploadPhotoBox,
} from './UploadAvatarStyled';
import Icon from 'src/components/common/Icon';
import imgMob2x from 'src/assets/images/settings/setMob@2x.png';

const UploadAvatar = ({ handleSelect }) => {
  const [uploadedAvatar, setUploadedAvatar] = useState(null);

  const filePicker = useRef();

  const handleChange = (e) => {
    setUploadedAvatar(e.target.files[0]);
    handleSelect(e.target.files[0]);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <div>
      <UploadPhotoBox>
        <AvatarBox>
          <img src={imgMob2x} width="36px" height="36px" alt="Profile Photo" />
        </AvatarBox>

        <PickButton type="button" onClick={handlePick}>
          <Icon
            name={'icon-direct-inbox'}
            width={'16px'}
            height={'16px'}
            fill={'#E3FFA8'}
          />
          {uploadedAvatar ? uploadedAvatar.name : 'Download new photo'}
        </PickButton>
      </UploadPhotoBox>

      <OriginalFilePicker
        ref={filePicker}
        type="file"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.web,.gif"
      />
    </div>
  );
};

export default UploadAvatar;
