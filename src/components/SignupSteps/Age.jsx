import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

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
  StylesErrorAge,
  StylesErrorSvg,
  BackLinkwrapper,
} from './Age.styled';

const SignUpAge = ({ setStep }) => {
  const saveDataToLocalStorage = (values) => {
    localStorage.setItem('ageSexReg', JSON.stringify(values));
  };

  const loadFormDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('ageSexReg');
    return savedData ? JSON.parse(savedData) : { sex: 'male', age: '' };
  };

  const validationSchema = Yup.object().shape({
    sex: Yup.string().required('Please select your gender'),
    age: Yup.number()
      .typeError('Age must be a number')
      .required('Please enter your age')
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .min(18, 'Age must be at least 18 years old')
      .max(122, 'Age must be at most 122 years old'),
  });

  const formik = useFormik({
    initialValues: loadFormDataFromLocalStorage(),
    validationSchema,
    onSubmit: (values) => {
      saveDataToLocalStorage(values);
      setStep((prevState) => prevState + 1);
    },
  });

  const handleRadioChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    formik.setFieldValue(fieldName, fieldValue);
  };

  useEffect(() => {
    return () => {
      saveDataToLocalStorage(formik.values);
    };
  }, [formik.values]);

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
                      name="sex"
                      value="male"
                      onChange={(e) => {
                        handleRadioChange(e);
                        formik.handleChange(e);
                      }}
                      checked={formik.values.sex === 'male'}
                      defaultChecked
                    />
                    <StylesLabelForm htmlFor="male">Male</StylesLabelForm>
                  </CustomRadio>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="female"
                      name="sex"
                      value="female"
                      onChange={(e) => {
                        handleRadioChange(e);
                        formik.handleChange(e);
                      }}
                      checked={formik.values.sex === 'female'}
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
                    style={{
                      border:
                        formik.errors.age && formik.touched.age
                          ? '1px solid #e74a3b'
                          : '1px solid #E3FFA8',
                    }}
                  />
                  {formik.errors.age && formik.touched.age ? (
                    <StylesErrorAge>
                      {formik.errors.age}
                      <StylesErrorSvg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM5.46875 6.50313L6.94063 7.97188L5.46875 9.46875C5.17812 9.7625 5.17812 10.2375 5.46875 10.5031C5.7625 10.8219 6.2375 10.8219 6.50313 10.5031L7.97188 9.05937L9.46875 10.5031C9.7625 10.8219 10.2375 10.8219 10.5031 10.5031C10.8219 10.2375 10.8219 9.7625 10.5031 9.46875L9.05937 7.97188L10.5031 6.50313C10.8219 6.2375 10.8219 5.7625 10.5031 5.46875C10.2375 5.17812 9.7625 5.17812 9.46875 5.46875L7.97188 6.94063L6.50313 5.46875C6.2375 5.17812 5.7625 5.17812 5.46875 5.46875C5.17812 5.7625 5.17812 6.2375 5.46875 6.50313Z"
                          fill="#E74A3B"
                        />
                      </StylesErrorSvg>
                    </StylesErrorAge>
                  ) : null}
                </AgeInputWrapper>
                <StylesBtnForm type="submit">Next</StylesBtnForm>
              </StylesForm>
              <BackLinkwrapper>
                <StyleBackLink
                  onClick={() => setStep((prevState) => (prevState -= 1))}
                  type="button"
                >
                  Back
                </StyleBackLink>
              </BackLinkwrapper>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpAge;
