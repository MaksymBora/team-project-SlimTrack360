import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStatus, selectVerify } from '../../Redux/userAuth/selector';
import { verifyUser } from '../../Redux/userAuth/operations';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [query] = useState(searchParams.get('searchQuery') ?? '');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVerify = useSelector(selectVerify);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(verifyUser(query));
  }, [dispatch, query]);

  useEffect(() => {
    if (status === 'fulfilled') {
      navigate('/main');
    }
    if (status === 'rejected' && !isVerify) {
      navigate('/');
    }
  }, [status, navigate, isVerify]);

  return <div></div>;
};

export default Verify;
