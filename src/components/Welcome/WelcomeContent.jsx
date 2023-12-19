import { Subtitle } from '../SignUp/SignUpContent.styled';
import {
  MainText,
  BenefitsList,
  BtnWrapper,
  Content,
  DescriptionItem,
  Dot,
  SignInButton,
  SignUpButton,
  SubmitButtonsContainer,
} from './WelcomeContent.styled';

export const WelcomeContent = () => {
  const listItems = [
    'Set goals',
    'Watch your calories',
    'Keep track of your water intake',
    'Control your weight',
  ];
  return (
    <>
      <Content>
        <MainText>Set goals and achieve them</MainText>
        <Subtitle>
          The service will help you set goals and follow them.
        </Subtitle>
        <SubmitButtonsContainer>
          <BtnWrapper>
            <SignInButton>Sign in</SignInButton>
          </BtnWrapper>
          <BtnWrapper>
            <SignUpButton>Sign up</SignUpButton>
          </BtnWrapper>
        </SubmitButtonsContainer>
        <BenefitsList>
          {listItems.map((item, index) => (
            <DescriptionItem key={index}>
              <Dot>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#E3FFA8" />
                </svg>
              </Dot>
              {item}
            </DescriptionItem>
          ))}
        </BenefitsList>
      </Content>
    </>
  );
};
