import { FormField, FormFieldTitle } from '../SettingsForm/SettingsFormStyled';
import { ErrorText, FormInput, FormInputWrap } from './SettingsFormFieldStyled';

const SettingsFormField = ({ value, formik, label }) => {
  return (
    <FormField>
      <FormFieldTitle htmlFor={value}>{`Your ${
        label ? label : value
      }`}</FormFieldTitle>
      <FormInputWrap>
        <FormInput
          id={value}
          name={value}
          type={'text'}
          value={formik.values[value]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          $error={formik.errors[value] && formik.touched[value]}
        />
        {formik.errors[value] && formik.touched[value] && (
          <ErrorText>{formik.errors[value]}</ErrorText>
        )}
      </FormInputWrap>
    </FormField>
  );
};

export default SettingsFormField;
