import { useRef, useState } from 'react';
import {
  AvatarBox,
  DefaultImage,
  OriginalFilePicker,
  PickButton,
  UploadPhotoBox,
} from './UploadAvatarStyled';
import Icon from 'src/components/common/Icon';
import { useTheme } from 'styled-components';

const UploadAvatar = ({ handleSelect, avatar, text }) => {
  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const filePicker = useRef();
  const theme = useTheme();

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
        {!avatar && !uploadedAvatar ? (
          <AvatarBox $isDefault={true}>
            <DefaultImage>{text}</DefaultImage>
          </AvatarBox>
        ) : (
          <AvatarBox $isDefault={false}>
            <img
              src={
                uploadedAvatar ? URL.createObjectURL(uploadedAvatar) : avatar
              }
              alt="Profile Photo"
            />
          </AvatarBox>
        )}

        <PickButton type="button" onClick={handlePick}>
          <Icon
            name={'icon-direct-inbox'}
            width={'16px'}
            height={'16px'}
            fill={theme.color.primaryGreenLite}
          />
          <span>
            {uploadedAvatar ? uploadedAvatar.name : 'Download new photo'}
          </span>
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
