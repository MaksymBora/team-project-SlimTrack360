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
} from '../../components/SignupSteps/SignupParam/SignupParam.styled';

import {
  HeightInputWrapper,
  InputLabel,
  InputStiles,
  StylesBtnForm,
  StylesForm,
  WeightInputWrapper,
} from './SignupParam/BodyParamForm.styled';

const SignUpParams = () => {
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
              media="(min-width: 768px)"
              srcSet={`${bodyParamTab1xWebp} 1x, ${bodyParamTab2xWebp} 2x, ${bodyParamTab3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${bodyParamTab1xPng} 1x, ${bodyParamTab2xPng} 2x, ${bodyParamTab3xPng} 3x`}
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${bodyParamMob1xWebp} 1x, ${bodyParamMob2xWebp} 2x, ${bodyParamMob3xWebp} 3x`}
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
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
                  <InputLabel htmlFor="heighInput">Height</InputLabel>
                  <InputStiles
                    type="number"
                    id="heighInput"
                    placeholder="Enter your height"
                  />
                </HeightInputWrapper>
                <WeightInputWrapper>
                  <InputLabel htmlFor="weightInput">Weight</InputLabel>
                  <InputStiles
                    type="number"
                    id="weightInput"
                    placeholder="Enter your weight"
                  />
                </WeightInputWrapper>
                <StylesBtnForm type="button">Next</StylesBtnForm>
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
