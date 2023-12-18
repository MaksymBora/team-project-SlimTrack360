import { useFormik } from 'formik';
import * as Yup from 'yup';

import bodyParamDesc1xPng from '../../assets/imgBodyParam/bodyParam-desctop-1x-min.png';
import bodyParamDesc2xPng from '../../assets/imgBodyParam/bodyParam-desctop-2x-min.png';
import bodyParamDesc3xPng from '../../assets/imgBodyParam/bodyParam-desctop-3x-min.png';
import bodyParamTab1xPng from '../../assets/imgBodyParam/bodyParam-tablet-1x-min.png';
import bodyParamTab2xPng from '../../assets/imgBodyParam/bodyParam-tablet-2x-min.png';
import bodyParamTab3xPng from '../../assets/imgBodyParam/bodyParam-tablet-3x-min.png';
import bodyParamMob1xPng from '../../assets/imgBodyParam/bodyParam-mobile-1x-min.png';
import bodyParamMob2xPng from '../../assets/imgBodyParam/bodyParam-mobile-2x-min.png';
import bodyParamMob3xPng from '../../assets/imgBodyParam/bodyParam-mobile-3x-min.png';

import bodyParamDesc1xWebp from '../../assets/imgBodyParam/bodyParam-desctop-1x-min.webp';
import bodyParamDesc2xWebp from '../../assets/imgBodyParam/bodyParam-desctop-2x-min.webp';
import bodyParamDesc3xWebp from '../../assets/imgBodyParam/bodyParam-desctop-3x-min.webp';
import bodyParamTab1xWebp from '../../assets/imgBodyParam/bodyParam-tablet-1x-min.webp';
import bodyParamTab2xWebp from '../../assets/imgBodyParam/bodyParam-tablet-2x-min.webp';
import bodyParamTab3xWebp from '../../assets/imgBodyParam/bodyParam-tablet-3x-min.webp';
import bodyParamMob1xWebp from '../../assets/imgBodyParam/bodyParam-mobile-1x-min.webp';
import bodyParamMob2xWebp from '../../assets/imgBodyParam/bodyParam-mobile-2x-min.webp';
import bodyParamMob3xWebp from '../../assets/imgBodyParam/bodyParam-mobile-3x-min.webp';

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
  HeightInputWrapper,
  InputLabel,
  InputStiles,
  StylesBtnForm,
  StylesForm,
  WeightInputWrapper,
  StylesErrorWeight,
  StylesErrorHeight,
} from './Param.styled';

const SignUpParams = () => {
  const validationSchema = Yup.object().shape({
    height: Yup.number()
      .typeError('Height must be a number')
      .required('Please enter your height')
      .positive('Height must be a positive number')
      .integer('Height must be an integer')
      .min(100, 'Height must be at least 100 cm')
      .max(250, 'Height must be at most 250 cm'),

    weight: Yup.number()
      .typeError('Weight must be a number')
      .required('Please enter your weight')
      .positive('Weight must be a positive number')
      .integer('Weight must be an integer')
      .min(5, 'Weight must be at least 5 kg')
      .max(150, 'Weight must be at most 150 kg'),
  });

  const formik = useFormik({
    initialValues: {
      height: '',
      weight: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const jsonData = JSON.stringify(values);
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
              srcSet={`${bodyParamDesc1xWebp} 1x, ${bodyParamDesc2xWebp} 2x, ${bodyParamDesc3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${bodyParamDesc1xPng} 1x, ${bodyParamDesc2xPng} 2x, ${bodyParamDesc3xPng} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${bodyParamTab1xWebp} 1x, ${bodyParamTab2xWebp} 2x, ${bodyParamTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 834px)"
              srcSet={`${bodyParamTab1xPng} 1x, ${bodyParamTab2xPng} 2x, ${bodyParamTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${bodyParamMob1xWebp} 1x, ${bodyParamMob2xWebp} 2x, ${bodyParamMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 833px)"
              srcSet={`${bodyParamMob1xPng} 1x, ${bodyParamMob2xPng} 2x, ${bodyParamMob3xPng} 3x`}
              type="image/png"
            />
            <img src={bodyParamTab1xPng} alt="Goal" />
          </StylePicture>
          <DescWrapper>
            <StyleTitle>Body parameters</StyleTitle>
            <StyleSubtitle>
              Enter your parameters for correct performance tracking
            </StyleSubtitle>
            <StyleBtnColumn>
              <StylesForm onSubmit={formik.handleSubmit}>
                <HeightInputWrapper>
                  <InputLabel htmlFor="heightInput">Height</InputLabel>
                  <InputStiles
                    type="number"
                    id="heightInput"
                    name="height"
                    placeholder="Enter your height"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                  />
                  {formik.errors.height && formik.touched.height ? (
                    <StylesErrorHeight>
                      {formik.errors.height}
                    </StylesErrorHeight>
                  ) : null}
                </HeightInputWrapper>
                <WeightInputWrapper>
                  <InputLabel htmlFor="weightInput">Weight</InputLabel>
                  <InputStiles
                    type="number"
                    id="weightInput"
                    name="weight"
                    placeholder="Enter your weight"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                  />
                  {formik.errors.weight && formik.touched.weight ? (
                    <StylesErrorWeight>
                      {formik.errors.weight}
                    </StylesErrorWeight>
                  ) : null}
                </WeightInputWrapper>
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

export default SignUpParams;
