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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserParams } from '../../../Redux/userAuth/operations';

const SettingsForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const initialData = {
    levelActivity: user?.levelActivity || 1,
    age: user?.age || 18,
    sex: user?.sex || 'male',
    height: user?.height || 185,
    name: user?.name || 'Name',
    currentWeight: user?.currentWeight || 65,
    avatarUrl: user?.avatarUrl,
  };

  const [newAvatar, setNewAvatar] = useState(null);

  const formik = useFormik({
    initialValues: initialData,
    onSubmit: async (values) => {
      dispatch(updateUserParams({ values, newAvatar }));
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
          label="weight"
          formik={formik}
          value={'currentWeight'}
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
