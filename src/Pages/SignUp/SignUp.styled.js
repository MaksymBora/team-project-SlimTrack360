import styled from 'styled-components';
// import DesktopImg from '../../assets/images/SignUp/Desktop_Illustration.png';
// import TabletImg from '../../assets/images/SignUp/Tablet_Illustration.png';
// import MobileImg from '../../assets/images/SignUp/Mobile_Illustration.png';
export const Wrapper = styled.section``;
export const Div = styled.div`
  max-width: 833px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    align-items: center;
  }
`;
export const Image = styled.img`
  display: flex;
  width: 300px;
  height: 296px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media screen and (min-width: 834px) {
    max-width: none;

    display: flex;
    width: 380px;
    height: 376px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;
export const Img = styled.img`
  display: block;
  // max-width: none;
  @media screen and (min-width: 1440px) {
    max-width: none;
  }
`;
export const SignUpContent = styled.div``;
