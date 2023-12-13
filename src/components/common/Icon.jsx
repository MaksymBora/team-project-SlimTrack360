import sprite from '../../assets/sprite.svg';

export default function Icon({ name, width, height }) {
  return (
    <svg width={width} height={height}>
      <use href={sprite + '#' + name}></use>
    </svg>
  );
}
