import { RadioLi, RadioButton } from './RadioItemStyled';

const RadioItem = ({ item, formik }) => {
  const { id, name, value, label } = item;

  return (
    <RadioLi key={id}>
      <RadioButton
        type="radio"
        id={id}
        name={name}
        checked={formik.values[name] === value}
        value={value}
        onChange={formik.handleChange}
      />

      <label htmlFor={id}>{label}</label>
    </RadioLi>
  );
};

export default RadioItem;
