import { useFormik } from 'formik';
import * as Yup from 'yup';

import genderAgeDesc1xPng from '../../assets/imgGenderAge/genderAge-desctop-1x-min.png';
import genderAgeDesc2xPng from '../../assets/imgGenderAge/genderAge-desctop-2x-min.png';
import genderAgeDesc3xPng from '../../assets/imgGenderAge/genderAge-desctop-3x-min.png';
import genderAgeTab1xPng from '../../assets/imgGenderAge/genderAge-tablet-1x-min.png';
import genderAgeTab2xPng from '../../assets/imgGenderAge/genderAge-tablet-2x-min.png';
import genderAgeTab3xPng from '../../assets/imgGenderAge/genderAge-tablet-3x-min.png';
import genderAgeMob1xPng from '../../assets/imgGenderAge/genderAge-mobile-1x-min.png';
import genderAgeMob2xPng from '../../assets/imgGenderAge/genderAge-mobile-2x-min.png';
import genderAgeMob3xPng from '../../assets/imgGenderAge/genderAge-mobile-3x-min.png';

import genderAgeDesc1xWebp from '../../assets/imgGenderAge/genderAge-desctop-1x-min.webp';
import genderAgeDesc2xWebp from '../../assets/imgGenderAge/genderAge-desctop-2x-min.webp';
import genderAgeDesc3xWebp from '../../assets/imgGenderAge/genderAge-desctop-3x-min.webp';
import genderAgeTab1xWebp from '../../assets/imgGenderAge/genderAge-tablet-1x-min.webp';
import genderAgeTab2xWebp from '../../assets/imgGenderAge/genderAge-tablet-2x-min.webp';
import genderAgeTab3xWebp from '../../assets/imgGenderAge/genderAge-tablet-3x-min.webp';
import genderAgeMob1xWebp from '../../assets/imgGenderAge/genderAge-mobile-1x-min.webp';
import genderAgeMob2xWebp from '../../assets/imgGenderAge/genderAge-mobile-2x-min.webp';
import genderAgeMob3xWebp from '../../assets/imgGenderAge/genderAge-mobile-3x-min.webp';

import {
  Container,
  DescWrapper,
  StyleBackLink,
  StyleBtnColumn,
  StylePicture,
  StyleSubtitle,
  StyleTitle,
  StylesSection,
  SubtitleGenderForm,
  Wrapper,
  AgeInputLabel,
  AgeInputStiles,
  AgeInputWrapper,
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from './Age.styled';

const SignUpAge = () => {
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select your gender'),
    age: Yup.number()
      .typeError('Age must be a number')
      .required('Please enter your age')
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .min(16, 'Age must be at least 16 years old')
      .max(100, 'Age must be at most 100 years old'),
  });

  const formik = useFormik({
    initialValues: {
      gender: 'male',
      age: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const jsonData = JSON.stringify(values);
      console.log('Form values:', jsonData);
    },
  });

  return (
    <StylesSection>
      <Container>
        <Wrapper>
          <StylePicture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${genderAgeDesc1xWebp} 1x, ${genderAgeDesc2xWebp} 2x, ${genderAgeDesc3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${genderAgeDesc1xPng} 1x, ${genderAgeDesc2xPng} 2x, ${genderAgeDesc3xPng} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${genderAgeTab1xWebp} 1x, ${genderAgeTab2xWebp} 2x, ${genderAgeTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${genderAgeTab1xPng} 1x, ${genderAgeTab2xPng} 2x, ${genderAgeTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${genderAgeMob1xWebp} 1x, ${genderAgeMob2xWebp} 2x, ${genderAgeMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${genderAgeMob1xPng} 1x, ${genderAgeMob2xPng} 2x, ${genderAgeMob3xPng} 3x`}
              type="image/png"
            />
            <img src={genderAgeTab1xPng} alt="Goal" />
          </StylePicture>
          <DescWrapper>
            <StyleTitle>Select gender, Age</StyleTitle>
            <StyleSubtitle>
              Choose a goal so that we can help you effectively
            </StyleSubtitle>
            <StyleBtnColumn>
              <SubtitleGenderForm>Gender</SubtitleGenderForm>
              <StylesForm onSubmit={formik.handleSubmit}>
                <StylesRadioBtn>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={formik.handleChange}
                      defaultChecked
                    />
                    <StylesLabelForm htmlFor="male">Male</StylesLabelForm>
                  </CustomRadio>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={formik.handleChange}
                    />
                    <StylesLabelForm htmlFor="female">Female</StylesLabelForm>
                  </CustomRadio>
                </StylesRadioBtn>
                <AgeInputWrapper>
                  <AgeInputLabel htmlFor="ageInput">Your age</AgeInputLabel>
                  <AgeInputStiles
                    type="number"
                    id="ageInput"
                    name="age"
                    placeholder="Enter your age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                  {formik.errors.age && formik.touched.age ? (
                    <div>{formik.errors.age}</div>
                  ) : null}
                </AgeInputWrapper>
                <StylesBtnForm type="submit">Next</StylesBtnForm>
              </StylesForm>
              <StyleBackLink>Back</StyleBackLink>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpAge;
