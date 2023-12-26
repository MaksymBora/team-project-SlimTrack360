import { register } from '../../Redux/userAuth/operations';
import { Loader } from '../../utils/Loader';
import activityDesc1xPng from '../../assets/imgActivity/activity-desctop-1x-min.png';
import activityDesc2xPng from '../../assets/imgActivity/activity-desctop-2x-min.png';
import activityDesc3xPng from '../../assets/imgActivity/activity-desctop-3x-min.png';
import activityTab1xPng from '../../assets/imgActivity/activity-tablet-1x-min.png';
import activityTab2xPng from '../../assets/imgActivity/activity-tablet-2x-min.png';
import activityTab3xPng from '../../assets/imgActivity/activity-tablet-3x-min.png';
import activityMob1xPng from '../../assets/imgActivity/activity-mobile-1x-min.png';
import activityMob2xPng from '../../assets/imgActivity/activity-mobile-2x-min.png';
import activityMob3xPng from '../../assets/imgActivity/activity-mobile-3x-min.png';

import activityDesc1xWebp from '../../assets/imgActivity/activity-desctop-1x-min.webp';
import activityDesc2xWebp from '../../assets/imgActivity/activity-desctop-2x-min.webp';
import activityDesc3xWebp from '../../assets/imgActivity/activity-desctop-3x-min.webp';
import activityTab1xWebp from '../../assets/imgActivity/activity-tablet-1x-min.webp';
import activityTab2xWebp from '../../assets/imgActivity/activity-tablet-2x-min.webp';
import activityTab3xWebp from '../../assets/imgActivity/activity-tablet-3x-min.webp';
import activityMob1xWebp from '../../assets/imgActivity/activity-mobile-1x-min.webp';
import activityMob2xWebp from '../../assets/imgActivity/activity-mobile-2x-min.webp';
import activityMob3xWebp from '../../assets/imgActivity/activity-mobile-3x-min.webp';

import {
  Container,
  DescWrapper,
  StyleBackLink,
  StyleBtnColumn,
  StylePicture,
  StyleSubtitle,
  StyleTitle,
  StylesSection,
  Wrapper,
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
  BackLinkwrapper,
} from './Activity.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUpActivity = ({ setStep, formik }) => {
  const [sending, setSending] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = async () => {
    try {
      setSending('loading');

      const {
        age,
        currentWeight,
        email,
        goal,
        height,
        levelActivity,
        name,
        password,
        sex,
      } = formik.values;
      const data = {
        age,
        currentWeight,
        email,
        goal,
        height,
        levelActivity: Number(levelActivity),
        name,
        password,
        sex,
      };
      await dispatch(register(data)).unwrap();
    } catch (err) {
      navigate('/signin');
      return err;
    } finally {
      setSending('');
    }
  };

  return (
    <StylesSection>
      <Container>
        <Wrapper>
          <StylePicture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${activityDesc1xWebp} 1x, ${activityDesc2xWebp} 2x, ${activityDesc3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${activityDesc1xPng} 1x, ${activityDesc2xPng} 2x, ${activityDesc3xPng} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${activityTab1xWebp} 1x, ${activityTab2xWebp} 2x, ${activityTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${activityTab1xPng} 1x, ${activityTab2xPng} 2x, ${activityTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${activityMob1xWebp} 1x, ${activityMob2xWebp} 2x, ${activityMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${activityMob1xPng} 1x, ${activityMob2xPng} 2x, ${activityMob3xPng} 3x`}
              type="image/png"
            />
            <img src={activityTab1xPng} alt="Goal" />
          </StylePicture>
          <DescWrapper>
            <StyleTitle>Your Activity</StyleTitle>
            <StyleSubtitle>
              To correctly calculate calorie and water intake
            </StyleSubtitle>
            <StyleBtnColumn>
              <StylesForm onSubmit={formik.handleSubmit}>
                <StylesRadioBtn>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1"
                      name="levelActivity"
                      value="1"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.levelActivity === '1'}
                    />
                    <StylesLabelForm htmlFor="1">
                      1.2 - if you do not have physical activity and sedentary
                      work
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="2"
                      name="levelActivity"
                      value="2"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.levelActivity === '2'}
                    />
                    <StylesLabelForm htmlFor="2">
                      1.375 - if you do short runs or light gymnastics 1-3 times
                      a week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="3"
                      name="levelActivity"
                      value="3"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.levelActivity === '3'}
                    />
                    <StylesLabelForm htmlFor="3">
                      1.55 - if you play sports with average loads 3-5 times a
                      week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="4"
                      name="levelActivity"
                      value="4"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.levelActivity === '4'}
                    />
                    <StylesLabelForm htmlFor="4">
                      1.725 - if you train fully 6-7 times a week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="5"
                      name="levelActivity"
                      value="5"
                      onChange={formik.handleChange}
                      defaultChecked={formik.values.levelActivity === '5'}
                    />
                    <StylesLabelForm htmlFor="5">
                      1.9 - if your work is related to physical labor, you train
                      2 times a day and include strength exercises in your
                      training program
                    </StylesLabelForm>
                  </CustomRadio>
                </StylesRadioBtn>

                <StylesBtnForm
                  type="submit"
                  onClick={() => {
                    handleSubmitForm();
                  }}
                >
                  {sending === 'loading' ? <Loader /> : 'Sign Up'}
                </StylesBtnForm>
              </StylesForm>

              <BackLinkwrapper>
                <StyleBackLink
                  type="button"
                  onClick={() => setStep((prevState) => (prevState -= 1))}
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

export default SignUpActivity;
