import { Link } from 'react-router-dom';
import { Subtitle } from '../Auth/Signup/SignUpContent.styled';
import {
  MainText,
  BenefitsList,
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
          <Link to="/signin">
            <SignInButton>Sign in</SignInButton>
          </Link>
          <Link to="/signup">
            <SignUpButton>Sign up</SignUpButton>
          </Link>
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
