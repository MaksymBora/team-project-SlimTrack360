import {
  ButtonStyle,
  SvgArrowRight,
} from '../../../Pages/Diary/DiaryPage.styled';

const GoBackPage = () => {
  return (
    <ButtonStyle>
      <SvgArrowRight>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465"
            stroke="#B6B6B6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.33301 8H13.553"
            stroke="#B6B6B6"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SvgArrowRight>
    </ButtonStyle>
  );
};

export default GoBackPage;
