import { useFormik } from 'formik';
import * as Yup from 'yup';
import goalsDesc1xPng from '../../assets/imgGoal/goals-desctop-1x-min.png';
import goalsDesc2xPng from '../../assets/imgGoal/goals-desctop-2x-min.png';
import goalsDesc3xPng from '../../assets/imgGoal/goals-desctop-3x-min.png';
import goalsTab1xPng from '../../assets/imgGoal/goals-tablet-1x-min.png';
import goalsTab2xPng from '../../assets/imgGoal/goals-tablet-2x-min.png';
import goalsTab3xPng from '../../assets/imgGoal/goals-tablet-3x-min.png';
import goalsMob1xPng from '../../assets/imgGoal/goals-mobile-1x-min.png';
import goalsMob2xPng from '../../assets/imgGoal/goals-mobile-2x-min.png';
import goalsMob3xPng from '../../assets/imgGoal/goals-mobile-3x-min.png';

import goalsDesc1xWebp from '../../assets/imgGoal/goals-desctop-1x-min.webp';
import goalsDesc2xWebp from '../../assets/imgGoal/goals-desctop-2x-min.webp';
import goalsDesc3xWebp from '../../assets/imgGoal/goals-desctop-3x-min.webp';
import goalsTab1xWebp from '../../assets/imgGoal/goals-tablet-1x-min.webp';
import goalsTab2xWebp from '../../assets/imgGoal/goals-tablet-2x-min.webp';
import goalsTab3xWebp from '../../assets/imgGoal/goals-tablet-3x-min.webp';
import goalsMob1xWebp from '../../assets/imgGoal/goals-mobile-1x-min.webp';
import goalsMob2xWebp from '../../assets/imgGoal/goals-mobile-2x-min.webp';
import goalsMob3xWebp from '../../assets/imgGoal/goals-mobile-3x-min.webp';

import {
  Container,
  DescWrapper,
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
} from './Goal.styled';

const SignUpGoal = ({ setStep }) => {
  const validationSchema = Yup.object().shape({
    goal: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      goal: 'Lose Fat',
    },
    validationSchema,
    onSubmit: (values) => {
      const retrievedData = sessionStorage.getItem('authReg');
      const parsedData = JSON.parse(retrievedData);
      parsedData.goal = values.goal;
      const updatedJsonData = JSON.stringify(parsedData);
      sessionStorage.setItem('authReg', updatedJsonData);

      setStep((prevState) => (prevState += 1));
    },
  });

  return (
    <StylesSection>
      <Container>
        <Wrapper>
          <StylePicture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${goalsDesc1xWebp} 1x, ${goalsDesc2xWebp} 2x, ${goalsDesc3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${goalsDesc1xPng} 1x, ${goalsDesc2xPng} 2x, ${goalsDesc3xPng} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${goalsTab1xWebp} 1x, ${goalsTab2xWebp} 2x, ${goalsTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${goalsTab1xPng} 1x, ${goalsTab2xPng} 2x, ${goalsTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${goalsMob1xWebp} 1x, ${goalsMob2xWebp} 2x, ${goalsMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${goalsMob1xPng} 1x, ${goalsMob2xPng} 2x, ${goalsMob3xPng} 3x`}
              type="image/png"
            />
            <img src={goalsTab1xPng} alt="Goal" />
          </StylePicture>
          <DescWrapper>
            <StyleTitle>Your goal</StyleTitle>
            <StyleSubtitle>
              Choose a goal so that we can help you effectively
            </StyleSubtitle>
            <StyleBtnColumn>
              <StylesForm onSubmit={formik.handleSubmit}>
                <StylesRadioBtn>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="lose_fat"
                      name="goal"
                      value="Lose Fat"
                      onChange={formik.handleChange}
                      checked={formik.values.goal === 'Lose Fat'}
                    />
                    <StylesLabelForm htmlFor="lose_fat">
                      Lose Fat
                    </StylesLabelForm>
                  </CustomRadio>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="maintain"
                      name="goal"
                      value="Maintain"
                      onChange={formik.handleChange}
                      checked={formik.values.goal === 'Maintain'}
                    />
                    <StylesLabelForm htmlFor="maintain">
                      Maintain
                    </StylesLabelForm>
                  </CustomRadio>
                  <CustomRadio>
                    <CustomRadioInput
                      type="radio"
                      id="gain_muscle"
                      name="goal"
                      value="Gain Muscle"
                      onChange={formik.handleChange}
                      checked={formik.values.goal === 'Gain Muscle'}
                    />
                    <StylesLabelForm htmlFor="gain_muscle">
                      Gain Muscle
                    </StylesLabelForm>
                  </CustomRadio>
                </StylesRadioBtn>
                <StylesBtnForm type="submit">Next</StylesBtnForm>
              </StylesForm>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpGoal;
