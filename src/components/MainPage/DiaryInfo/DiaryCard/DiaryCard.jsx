import { useState } from 'react';
import RecordDiaryModal from '../../../../components/RecordDiaryModal/RecordDiaryModal.jsx';
import Icon from '../../../../components/common/Icon';
import {
  InfoWrap,
  Title,
  CardWrap,
  CarbWrap,
  ProteinWrap,
  FatWrap,
  ValueSpan,
  ImageWrap,
  TitleWrap,
  ButtonDelete,
  AddButton,
} from './DiaryCard.styled';

export const DiaryCard = ({
  category,
  categoryImage,
  categoryImage2x,
  carbonohidrates,
  protein,
  fat,
  dataLength = 1,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CardWrap>
      <TitleWrap>
        <ImageWrap>
          <img
            srcSet={`${categoryImage} 1x, ${categoryImage2x} 2x`}
            src={categoryImage}
            alt="Plate"
          />
        </ImageWrap>
        <Title>{category}</Title>
      </TitleWrap>
      {dataLength > 0 ? (
        <InfoWrap>
          <CarbWrap>
            Carbonohidrates: <ValueSpan>{carbonohidrates}</ValueSpan>
          </CarbWrap>
          <ProteinWrap>
            Protein: <ValueSpan>{protein}</ValueSpan>
          </ProteinWrap>
          <FatWrap>
            Fat: <ValueSpan>{fat}</ValueSpan>
          </FatWrap>
          <ButtonDelete type="button" onClick={onclick}>
            <Icon name="icon-trash" width={20} height={20} />
          </ButtonDelete>
        </InfoWrap>
      ) : (
        <AddButton onClick={openModal}>
          <Icon name="icon-add" width={16} height={16} /> Record your meal
        </AddButton>
      )}

      <RecordDiaryModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        category={category}
        categoryImage={categoryImage}
      />
    </CardWrap>
  );
};
