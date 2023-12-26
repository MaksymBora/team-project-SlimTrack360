import Container from './Container/Container';
import SignupGoal from '../../components/SignupSteps/Goal';
import SignUpAge from '../../components/SignupSteps/Age';
import SignUpParams from '../../components/SignupSteps/Params';
import SignUpActivity from '../../components/SignupSteps/Activity';
import { Div, Img, Wrapper } from './SignUp.styled';
import { useFormik } from 'formik';
// png
import _1DesktopImg from './images/Illustration_desk@1x.png';
import _2DesktopImg from './images/Illustration_desk@2x.png';
import _1TabletImg from './images/Illustration_tab@1x.png';
import _2TabletImg from './images/Illustration_tab@2x.png';
import _1MobImg from './images/Illustration_mob@1x.png';
import _2MobImg from './images/Illustration_mob@2x.png';
// webp
import _1DesktopWebP from './images/Illustration_desk@1x.webp';
import _2DesktopWebP from './images/Illustration_desk@2x.webp';
import _1TabletWebP from './images/Illustration_tab@1x.webp';
import _2TabletWebP from './images/Illustration_tab@2x.webp';
import _1MobWebP from './images/Illustration_mob@1x.webp';
import _2MobWebP from './images/Illustration_mob@2x.webp';
import { useState } from 'react';
import { SignUpContent } from '../../components/Auth/Signup/SignUpContent';
import { signUpSchema } from './signUpValidation';

const SignUp = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: 'Lose Fat',
      sex: 'male',
      age: '',
      height: '',
      currentWeight: '',
      levelActivity: '1',
    },
    validationSchema: signUpSchema,
  });

  return (
    <>
      <Wrapper>
        {step === 1 && (
          <Container>
            <Div>
              <picture>
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${_1DesktopWebP} 1x, ${_2DesktopWebP} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 1440px)"
                  srcSet={`${_1DesktopImg} 1x, ${_2DesktopImg} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 834px)"
                  srcSet={`${_1TabletWebP} 1x, ${_2TabletWebP} 2x`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 834px)"
                  srcSet={`${_1TabletImg} 1x, ${_2TabletImg} 2x`}
                  type="image/png"
                />
                <source
                  media="(max-width: 833px)"
                  srcSet={`${_1MobWebP} 1x, ${_2MobWebP} 2x`}
                  type="image/webp"
                />
                <source
                  media="(max-width: 833px)"
                  srcSet={`${_1MobImg} 1x, ${_2MobImg} 2x`}
                  type="image/png"
                />
                <Img src={_1DesktopImg} alt="Responsive" />
              </picture>
              <SignUpContent setStep={setStep} formik={formik} />
            </Div>
          </Container>
        )}
        {step === 2 && <SignupGoal setStep={setStep} formik={formik} />}
        {step === 3 && <SignUpAge setStep={setStep} formik={formik} />}
        {step === 4 && <SignUpParams setStep={setStep} formik={formik} />}
        {step === 5 && <SignUpActivity setStep={setStep} formik={formik} />}
      </Wrapper>
    </>
  );
};

export default SignUp;
