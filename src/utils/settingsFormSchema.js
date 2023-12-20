import * as yup from 'yup';

export const settingsFormSchema = yup.object({
  name: yup.string().required('Required field'),
  age: yup.number().required('Required field').typeError('Must be a number'),
  currentWeight: yup
    .number()
    .required('Required field')
    .typeError('Must be a number'),
  height: yup.number().required('Required field').typeError('Must be a number'),
});
