import sprite from '../../assets/sprite.svg';

export default function Icon({ name, width, height, fill }) {
  return (

    <svg width={width} height={height} fill={fill}>
      <use href={sprite + '#' + name}></use>

    </svg>
  );
}
