import { LogoBtn, LogoText } from './header.styled.jsx';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <LogoBtn>
        <LogoText> HealthyHub</LogoText>
      </LogoBtn>
    </Link>
  );
};
