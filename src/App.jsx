import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import {
  Welcome,
  SignIn,
  SignUp,
  Dashboard,
  Diary,
  ForgotPass,
  ProfileSettings,
  Recommented,
  Main,
} from './components/Routing/routesImport';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './Redux/userAuth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute component={<Welcome />} redirectTo="/main" />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute component={<SignIn />} redirectTo="/main" />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute component={<SignUp />} redirectTo="/main" />
            }
          />
          <Route
            path="forgot-password"
            element={
              <RestrictedRoute component={<ForgotPass />} redirectTo="/main" />
            }
          />

          <Route
            path="main"
            element={<PrivateRoute component={<Main />} redirectTo="/" />}
          />
          <Route
            path="dashboard"
            element={<PrivateRoute component={<Dashboard />} redirectTo="/" />}
          />
          <Route
            path="diary"
            element={<PrivateRoute component={<Diary />} redirectTo="/" />}
          />
          <Route
            path="settings"
            element={
              <PrivateRoute component={<ProfileSettings />} redirectTo="/" />
            }
          />
          <Route
            path="recommended-food"
            element={
              <PrivateRoute component={<Recommented />} redirectTo="/" />
            }
          />
          <Route path="/*" element={<Navigate raplce to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
