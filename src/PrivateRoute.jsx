// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Redux/userAuth/hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};
