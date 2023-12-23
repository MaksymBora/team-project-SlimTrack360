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
import { useDispatch } from 'react-redux';
import { deleteFoodIntake } from '../../../../Redux/foodIntake/operations.js';

export const DiaryCard = ({
  category,
  categoryImage,
  categoryImage2x,
  carbonohidrates,
  protein,
  fat,
  dataLength,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOnModalOpen = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleOnClickDelete = () => {
    const data = {
      _id: id,
    };

    const categoryLower = category.toLowerCase();

    data[categoryLower] = {
      products: [],
    };

    dispatch(deleteFoodIntake(data));
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
          <ButtonDelete type="button" onClick={handleOnClickDelete}>
            <Icon name="icon-trash" width={20} height={20} />
          </ButtonDelete>
        </InfoWrap>
      ) : (
        <AddButton onClick={handleOnModalOpen}>
          <Icon name="icon-add" icon-add-more width={16} height={16} /> Record
          your meal
        </AddButton>
      )}

      <RecordDiaryModal
        isModalOpen={isModalOpen}
        onClose={handleOnModalOpen}
        category={category}
        categoryImage={categoryImage}
      />
    </CardWrap>
  );
};
