import Icon from 'src/components/common/Icon';
import sprite from 'src/assets/sprite.svg';

const Home = () => {
  return (
    <>
      <p>Welcome!</p>

      <svg width="24px" height="24px">
        <use href={`${sprite}#icon-edit-2`} />
      </svg>

      {/* OR USE Icon Coponent and throw props OR use svg tag */}
      <Icon name="icon-edit-2" width={'24px'} height={'24px'} />
    </>
  );
};

export default Home;
