import { lazy } from 'react';

const Welcome = lazy(() => import('../../Pages/Welcome/Welcome'));
const SignIn = lazy(() => import('../../Pages/SignIn/SignIn'));
const SignUp = lazy(() => import('../../Pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('../../Pages/Dashboard/Dashboard'));
const Diary = lazy(() => import('../../Pages/Diary/Diary'));
const ForgotPass = lazy(() => import('../../Pages/ForgotPass/ForgotPass'));
const ProfileSettings = lazy(
  () => import('../../Pages/ProfileSettings/ProfileSettings')
);
const Recommented = lazy(() => import('../../Pages/Recommented/Recommented'));
const Main = lazy(() => import('../../Pages/Main/Main'));

export {
  Welcome,
  SignIn,
  SignUp,
  Dashboard,
  Diary,
  ForgotPass,
  ProfileSettings,
  Recommented,
  Main,
};
