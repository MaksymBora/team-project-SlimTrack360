import { Route, Routes } from 'react-router-dom';
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
// import { selectIsLoggedIn } from './Redux/userAuth/selector';
import { useEffect } from 'react';
import { refreshUser } from './Redux/userAuth/operations';

const App = () => {
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="main" element={<Main />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPass />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="diary" element={<Diary />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="recommended-food" element={<Recommented />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
