import { useFormik } from 'formik';
import * as Yup from 'yup';

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
} from './Activity.styled';

const SignUpActivity = () => {
  const validationSchema = Yup.object().shape({
    activity: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      activity: '1.2',
    },
    validationSchema,
    onSubmit: (values) => {
      const activityValue = parseFloat(values.activity);
      const formattedValues = { activity: activityValue };
      const jsonData = JSON.stringify(formattedValues);
      console.log(jsonData);
    },
  });

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
                      id="1.2"
                      name="activity"
                      value={1.2}
                      onChange={formik.handleChange}
                      defaultChecked
                    />
                    <StylesLabelForm htmlFor="1.2">
                      1.2 - if you do not have physical activity and sedentary
                      work
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1.375"
                      name="activity"
                      value={1.375}
                      onChange={formik.handleChange}
                    />
                    <StylesLabelForm htmlFor="1.375">
                      1.375 - if you do short runs or light gymnastics 1-3 times
                      a week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1.55"
                      name="activity"
                      value={1.55}
                      onChange={formik.handleChange}
                    />
                    <StylesLabelForm htmlFor="1.55">
                      1.55 - if you play sports with average loads 3-5 times a
                      week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1.725"
                      name="activity"
                      value={1.725}
                      onChange={formik.handleChange}
                    />
                    <StylesLabelForm htmlFor="1.725">
                      1.725 - if you train fully 6-7 times a week
                    </StylesLabelForm>
                  </CustomRadio>

                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1.9"
                      name="activity"
                      value={1.9}
                      onChange={formik.handleChange}
                    />
                    <StylesLabelForm htmlFor="1.9">
                      1.9 - if your work is related to physical labor, you train
                      2 times a day and include strength exercises in your
                      training program
                    </StylesLabelForm>
                  </CustomRadio>
                </StylesRadioBtn>

                <StylesBtnForm type="submit">Sign Up</StylesBtnForm>
              </StylesForm>

              <StyleBackLink>Back</StyleBackLink>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpActivity;
