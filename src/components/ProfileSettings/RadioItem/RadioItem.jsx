import { RadioLi, RadioButton } from './RadioItemStyled';

const RadioItem = ({ item, formik }) => {
  const { id, name, value, label } = item;

  const isChecked = () => {
    if (typeof value === 'number') {
      return Number(formik.values[name]) === value;
    }
    if (typeof value === 'string') {
      return formik.values[name] === value;
    }
    return false;
  };

  return (
    <RadioLi key={id}>
      <RadioButton
        type="radio"
        id={id}
        name={name}
        checked={isChecked()}
        value={value}
        onChange={formik.handleChange}
      />

      <label htmlFor={id}>{label}</label>
    </RadioLi>
  );
};

export default RadioItem;
