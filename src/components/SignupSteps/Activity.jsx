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
} from '../../components/SignupSteps/SignupActivity/SignupActivity.styled';

import {
  CustomRadio,
  CustomRadioInput,
  StylesBtnForm,
  StylesForm,
  StylesLabelForm,
  StylesRadioBtn,
} from './SignupActivity/ActivityForm.styled';

const SignUpActivity = () => {
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
              media="(min-width: 768px)"
              srcSet={`${activityTab1xWebp} 1x, ${activityTab2xWebp} 2x, ${activityTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${activityTab1xPng} 1x, ${activityTab2xPng} 2x, ${activityTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${activityMob1xWebp} 1x, ${activityMob2xWebp} 2x, ${activityMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
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
              <StylesForm>
                <StylesRadioBtn>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="1.2"
                      name="activity"
                      value="1.2"
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
                      value="1.375"
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
                      value="1.55"
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
                      value="1.725"
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
                      value="1.9"
                    />
                    <StylesLabelForm htmlFor="1.9">
                      1.9 - if your work is related to physical labor, you train
                      2 times a day and include strength exercises in your
                      training program
                    </StylesLabelForm>
                  </CustomRadio>
                </StylesRadioBtn>

                <StylesBtnForm type="button">Sign Up</StylesBtnForm>
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
