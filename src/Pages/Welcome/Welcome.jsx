import Container from '../SignUp/Container/Container';
import { Img, Wrapper } from '../SignUp/SignUp.styled';
import { Div } from './Welcome.styled';
// png
import _1DesktopImg from '../../Pages/SignUp/images/Illustration_desk@1x.png';
import _2DesktopImg from '../../Pages/SignUp/images/Illustration_desk@2x.png';
import _1TabletImg from '../../Pages/SignUp/images/Illustration_tab@1x.png';
import _2TabletImg from '../../Pages/SignUp/images/Illustration_tab@2x.png';
import _1MobImg from '../../Pages/SignUp/images/Illustration_mob@1x.png';
import _2MobImg from '../../Pages/SignUp/images/Illustration_mob@2x.png';
// webp
import _1DesktopWebP from '../../Pages/SignUp/images/Illustration_desk@1x.webp';
import _2DesktopWebP from '../../Pages/SignUp/images/Illustration_desk@2x.webp';
import _1TabletWebP from '../../Pages/SignUp/images/Illustration_tab@1x.webp';
import _2TabletWebP from '../../Pages/SignUp/images/Illustration_tab@2x.webp';
import _1MobWebP from '../../Pages/SignUp/images/Illustration_mob@1x.webp';
import _2MobWebP from '../../Pages/SignUp/images/Illustration_mob@2x.webp';
import { WelcomeContent } from '../../components/Welcome/WelcomeContent';

const Welcome = () => {
  return (
    <>
      <Wrapper>
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
                media="(min-width: 768px)"
                srcSet={`${_1TabletWebP} 1x, ${_2TabletWebP} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${_1TabletImg} 1x, ${_2TabletImg} 2x`}
                type="image/png"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${_1MobWebP} 1x, ${_2MobWebP} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${_1MobImg} 1x, ${_2MobImg} 2x`}
                type="image/png"
              />
              <Img src={_1DesktopImg} alt="Responsive" />
            </picture>
            <WelcomeContent />
          </Div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Welcome;
