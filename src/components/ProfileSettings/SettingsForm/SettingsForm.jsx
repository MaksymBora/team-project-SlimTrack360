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
import { selectUser } from '../../../Redux/userAuth/selector';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSettings } from '../../../Redux/userAuth/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsForm = () => {
  const dispatch = useDispatch();
  const { name, levelActivity, age, sex, height, currentWeight, avatarUrl } =
    useSelector(selectUser);

  const initialData = {
    levelActivity: levelActivity || 1,
    age: age || 18,
    sex: sex || 'male',
    height: height || 185,
    name: name || 'Name',
    currentWeight: currentWeight || 65,
    avatarUrl,
  };

  const [newAvatar, setNewAvatar] = useState(null);

  const formik = useFormik({
    initialValues: initialData,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('name', values?.name);
      formData.append('age', values?.age);
      formData.append('sex', values?.sex);
      formData.append('height', values?.height);
      formData.append('currentWeight', values?.currentWeight);
      formData.append('levelActivity', Number(values?.levelActivity));

      if (newAvatar) {
        formData.append('avatar', newAvatar);
      }

      dispatch(updateUserSettings(formData));
      setNewAvatar(null);
    },

    validationSchema: settingsFormSchema,
  });

  const handleSelect = (file) => {
    setNewAvatar(file);
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <SettingsFormField value="name" formik={formik} />

        <FormField>
          <FormFieldTitle>Your photo</FormFieldTitle>
          <UploadAvatar
            handleSelect={handleSelect}
            avatar={formik.values.avatarUrl}
            text={formik.values.name?.charAt(0)?.toUpperCase()}
          />
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

        <SettingsFormField
          value="currentWeight"
          label="weight"
          formik={formik}
        />

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
