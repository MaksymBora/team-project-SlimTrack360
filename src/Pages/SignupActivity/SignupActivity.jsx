import { useRef, useEffect } from 'react';

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
} from '../../components/SignupActivity/SignupActivity.styled';
import ActivityForm from '../../components/SignupActivity/ActivityForm';

const SignUpGoal = () => {
  const backLinkLocationRef = useRef('/signup-data/3');
  const handleBackClick = () => {
    window.location.href = backLinkLocationRef.current;
  };
  useEffect(() => {
    backLinkLocationRef.current = ' /team-project-SlimTrack360/signup-data/3';
  }, []);

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
              <ActivityForm />
              <StyleBackLink onClick={handleBackClick}>Back</StyleBackLink>
            </StyleBtnColumn>
          </DescWrapper>
        </Wrapper>
      </Container>
    </StylesSection>
  );
};

export default SignUpGoal;
