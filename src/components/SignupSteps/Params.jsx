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
  StylesErrorSvg,
  BackLinkwrapper,
} from './Param.styled';
import { useState } from 'react';

const SignUpParams = ({ setStep, formik }) => {
  const [validation, setValidation] = useState('');

  const onClickBtnNext = () => {
    setValidation('validation');

    if (
      formik.values.height !== '' &&
      !formik.errors.height &&
      formik.values.weight !== '' &&
      !formik.errors.weight
    ) {
      setStep((prevState) => (prevState += 1));
    }
  };

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
              <StylesForm>
                <HeightInputWrapper>
                  <InputLabel htmlFor="heightInput">Height</InputLabel>
                  <InputStiles
                    className={
                      validation === 'validation'
                        ? formik.errors.height
                          ? 'error'
                          : 'correct'
                        : ''
                    }
                    type="number"
                    id="heightInput"
                    name="height"
                    placeholder="Enter your height"
                    onChange={formik.handleChange}
                    value={formik.values.height}
                    style={{
                      border:
                        formik.errors.height && formik.touched.height
                          ? '1px solid #e74a3b'
                          : '1px solid #E3FFA8',
                    }}
                  />
                  {formik.errors.height && formik.touched.height ? (
                    <StylesErrorHeight>
                      {formik.errors.height}
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
                    </StylesErrorHeight>
                  ) : null}
                </HeightInputWrapper>
                <WeightInputWrapper>
                  <InputLabel htmlFor="weightInput">Weight</InputLabel>
                  <InputStiles
                    className={
                      validation === 'validation'
                        ? formik.errors.currentWeight
                          ? 'error'
                          : 'correct'
                        : ''
                    }
                    type="number"
                    id="weightInput"
                    name="currentWeight"
                    placeholder="Enter your weight"
                    onChange={formik.handleChange}
                    value={formik.values.currentWeight}
                    style={{
                      border:
                        formik.errors.currentWeight &&
                        formik.touched.currentWeight
                          ? '1px solid #e74a3b'
                          : '1px solid #E3FFA8',
                    }}
                  />
                  {formik.errors.currentWeight &&
                  formik.touched.currentWeight ? (
                    <StylesErrorWeight>
                      {formik.errors.currentWeight}
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
                    </StylesErrorWeight>
                  ) : null}
                </WeightInputWrapper>
                <StylesBtnForm
                  type="button"
                  onClick={() => {
                    onClickBtnNext();
                  }}
                >
                  Next
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

export default SignUpParams;
