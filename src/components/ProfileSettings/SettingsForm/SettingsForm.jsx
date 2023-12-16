import { useState } from 'react';
import { useFormik } from 'formik';
import UploadAvatar from '../UploadAvatar/UploadAvatar';
import SettingsFormField from '../SettingsFormField/SettingsFormField';
import RadioItem from '../RadioItem/RadioItem';
import {
  activitiesArray,
  genderArray,
} from '../../../utils/settingsRadioButtonData';
import { settingsFormSchema } from '../../../utils/settingsFormSchema';
import {
  Form,
  FormField,
  FormFieldTitle,
  GenderList,
  ButtonsBox,
  CancelBtn,
  SubmitBtn,
  ActivityBoxField,
  ActivitiesList,
} from './SettingsFormStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialData = {
  levelActivity: '1.55',
  age: 22,
  sex: 'female',
  height: 165,
  name: 'Olena',
  currentWeight: 85,
  avatarUrl: null,
};

const SettingsForm = () => {
  const [newAvatar, setNewAvatar] = useState(null);

  const formik = useFormik({
    initialValues: initialData,
    onSubmit: (values) => {
      console.log('values', values);
      handleUpload();
      toast.success('Settings changed successfully');
    },
    validationSchema: settingsFormSchema,
  });

  const handleSelect = (file) => {
    setNewAvatar(file);
  };

  const handleUpload = async () => {
    try {
      if (!newAvatar) {
        return;
      }

      const formData = new FormData();
      formData.append('avatarUrl', newAvatar);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <SettingsFormField value="name" formik={formik} />

        <FormField>
          <FormFieldTitle>Your photo</FormFieldTitle>
          <UploadAvatar handleSelect={handleSelect} formik={formik} />
        </FormField>

        <SettingsFormField value="age" formik={formik} />

        <FormField>
          <FormFieldTitle>Gender</FormFieldTitle>
          <GenderList>
            {genderArray.map((gender) => (
              <RadioItem key={gender.id} item={gender} formik={formik} />
            ))}
          </GenderList>
        </FormField>

        <SettingsFormField value="height" formik={formik} />

        <SettingsFormField value="currentWeight" formik={formik} />

        <ActivityBoxField>
          <FormFieldTitle>Your activity</FormFieldTitle>
          <ActivitiesList>
            {activitiesArray.map((activity) => (
              <RadioItem key={activity.id} item={activity} formik={formik} />
            ))}
          </ActivitiesList>
        </ActivityBoxField>

        <ButtonsBox>
          <SubmitBtn type="submit">Submit</SubmitBtn>

          <CancelBtn type="button" onClick={formik.handleReset}>
            Cancel
          </CancelBtn>
        </ButtonsBox>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default SettingsForm;
