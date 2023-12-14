import styled from 'styled-components';

const PickButton = styled.button`
  background-color: transparent;
  color: ${(p) => p.theme.color.primaryWhite};
  font-size: 14px;
  line-height: 1.4;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const OriginalFilePicker = styled.input`
  position: absolute;
  width: 1px;
  height: 1x;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  background: transparent;
  overflow: hidden;
`;

const AvatarBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const UploadPhotoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export { PickButton, OriginalFilePicker, AvatarBox, UploadPhotoBox };
