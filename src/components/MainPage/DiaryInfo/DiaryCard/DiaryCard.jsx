import RecordDiaryModal from '../../../../components/RecordDiaryModal/RecordDiaryModal.jsx';

import {
  InfoWrap,
  Title,
  CardWrap,
  CarbWrap,
  ProteinWrap,
  ImageWrap,
  TitleWrap,
} from './DiaryCard.styled';

// const elementSum = (arr, elem) => {
//   return Math.round((arr.reduce((sum, dish) => sum + dish[elem], 0) * 10) / 10);
// };

export const DiaryCard = ({
  title,
  image,
  image2x,
  categoryImage,
  category,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <CardWrap>
      <TitleWrap>
        <ImageWrap>
          <img srcSet={`${image} 1x, ${image2x} 2x`} src={image} alt="Plate" />
        </ImageWrap>
        <Title>{title}</Title>
      </TitleWrap>
      {/* {info.length !== 0 ? ( */}
      <InfoWrap>
        <CarbWrap>
          Carbonohidrates: 0
          {/* <Value>{isNaN(carbonohidratesSum) ? 0 : carbonohidratesSum}</Value> */}
        </CarbWrap>
        <ProteinWrap>
          Protein: 0{/* <Value>{isNaN(proteinSum) ? 0 : proteinSum}</Value> */}
        </ProteinWrap>
        <p>
          Fat: 100
          {/* <Value>{isNaN(fatSum) ? 0 : fatSum}</Value> */}
        </p>
      </InfoWrap>
      {/* ) : ( */}
      {/* <AddButton >
          <AddIcon />
          Record your meal
        </AddButton> */}
      {/* )} */}
      {/* {isOpenModal && (
        <RecordDiaryModal
          onClose={handleRecordMeal}
          type={title.toLowerCase()}
        /> */}
      {/* )} */}
      <RecordDiaryModal
        // isModalOpen={isModalOpen}
        // onClose={closeModal}
        category={category}
        categoryImage={categoryImage}
      />
    </CardWrap>
  );
};
