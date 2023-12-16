import sprite from '../../assets/sprite.svg';

export default function Icon({ name, width, height, fill }) {
  return (
    <svg width={width} height={height}>
      <use href={sprite + '#' + name} style={{ fill: fill }}></use>
    </svg>
  );
}
