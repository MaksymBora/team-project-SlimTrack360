import * as yup from 'yup';

export const settingsFormSchema = yup.object({
  name: yup.string().required('Required field'),
  age: yup.number().required('Required field'),
  currentWeight: yup.number().required('Required field'),
  height: yup.number().required('Required field'),
});
