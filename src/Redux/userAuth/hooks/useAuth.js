import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
  selectVerify,
} from '../selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isVerify = useSelector(selectVerify);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    isVerify,
  };
};
