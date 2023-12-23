import { PulseLoader } from 'react-spinners';

const override = {
  display: 'flex',
  margin: '30vh auto 100vh',
  justifyContent: 'center',
};

export const Loader = () => {
  return <PulseLoader cssOverride={override} color="#E3FFA8" size={9} />;
};
