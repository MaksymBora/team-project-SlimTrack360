import { lazy } from 'react';

export const Welcome = lazy(() => import('../../Pages/Welcome/Welcome'));
export const SignIn = lazy(() => import('../../Pages/SignIn/SignIn'));
export const SignUp = lazy(() => import('../../Pages/SignUp/SignUp'));
export const Dashboard = lazy(() => import('../../Pages/Dashboard/Dashboard'));
export const Diary = lazy(() => import('../../Pages/Diary/Diary'));
export const ForgotPass = lazy(
  () => import('../../Pages/ForgotPass/ForgotPass')
);
export const ProfileSettings = lazy(
  () => import('../../Pages/ProfileSettings/ProfileSettings')
);
export const Recommented = lazy(
  () => import('../../Pages/Recommented/Recommented')
);
export const Main = lazy(() => import('../../Pages/Main/Main'));
export const Verify = lazy(() => import('../../Pages/Verify/Verify'));
