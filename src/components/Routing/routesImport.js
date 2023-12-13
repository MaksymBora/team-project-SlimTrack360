import { lazy } from 'react';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Welcome = lazy(() => import('../../Pages/Welcome/Welcome'));
const SignIn = lazy(() => import('../../Pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../../Pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('../../Pages/Dashboard/Dashboard'));
const Diary = lazy(() => import('../../Pages/Diary/Diary'));
const ForgotPass = lazy(() => import('../../Pages/ForgotPass/ForgotPass'));
const ProfileSettings = lazy(() =>
  import('../../Pages/ProfileSettings/ProfileSettings')
);
const Recommented = lazy(() => import('../../Pages/Recommented/Recommented'));
const Main = lazy(() => import('../../Pages/Main/Main'));
const SignUpGoal = lazy(() => import('../../Pages/SignupGoal/SignupGoal'));
const SignUpAge = lazy(() => import('../../Pages/SignupAge/SignupAge'));
const SignUpParams = lazy(() =>
  import('../../Pages/SignupParams/SignupParams')
);
const SignUpActivity = lazy(() =>
  import('../../Pages/SignupActivity/SignupActivity')
);

export {
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
};
