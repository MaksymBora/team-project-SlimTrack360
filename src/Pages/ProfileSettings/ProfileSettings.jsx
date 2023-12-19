import SettingsImg from '../../components/ProfileSettings/SettingsImg/SettingsImg';
import {
  Container,
  Section,
  Title,
  ContentContainer,
} from './ProfileSettingsStyled';

import SettingsForm from 'src/components/ProfileSettings/SettingsForm/SettingsForm';

const ProfileSettings = () => {
  return (
    <Section>
      <Container>
        <Title>Profile setting</Title>
        <ContentContainer>
          <SettingsImg />
          <SettingsForm />
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default ProfileSettings;
