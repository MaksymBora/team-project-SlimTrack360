import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import {
  Home,
  Welcome,
  SignIn,
  SignUp,
  Dashboard,
  Diary,
  ForgotPass,
  ProfileSettings,
  Recommented,
  SignUpGoal,
  SignUpAge,
  SignUpParams,
  SignUpActivity,
  Main,
} from './components/Routing/routesImport';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="main" element={<Main />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPass />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="diary" element={<Diary />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="recommended-food" element={<Recommented />} />
        </Route>
        <Route>
          <Route path="signup-data/1" element={<SignUpGoal />} />
          <Route path="signup-data/2" element={<SignUpAge />} />
          <Route path="signup-data/3" element={<SignUpParams />} />
          <Route path="signup-data/4" element={<SignUpActivity />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
