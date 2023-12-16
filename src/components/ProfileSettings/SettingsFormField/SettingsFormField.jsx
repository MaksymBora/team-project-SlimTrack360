import { FormField, FormFieldTitle } from '../SettingsForm/SettingsFormStyled';
import { ErrorText, FormInput, FormInputWrap } from './SettingsFormFieldStyled';

const SettingsFormField = ({ value, formik, type }) => {
  return (
    <FormField>
      <FormFieldTitle htmlFor={value}>{`Your ${value}`}</FormFieldTitle>
      <FormInputWrap>
        <FormInput
          id={value}
          name={value}
          type={type ? type : 'text'}
          value={formik.values[value]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          $error={formik.errors[value] && formik.touched[value]}
        />
        {formik.errors[value] && formik.touched[value] && (
          <ErrorText>
            {formik.errors[value]?.includes('must be a `number` type')
              ? 'Please enter number'
              : formik.errors[value]}
          </ErrorText>
        )}
      </FormInputWrap>
    </FormField>
  );
};

export default SettingsFormField;
