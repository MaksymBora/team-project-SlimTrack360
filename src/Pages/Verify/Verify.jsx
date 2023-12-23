import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStatus, selectVerify } from '../../Redux/userAuth/selector';
import { verifyUser } from '../../Redux/userAuth/operations';

const Verify = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isVerify = useSelector(selectVerify);
  const status = useSelector(selectStatus);

  console.log(id);
  useEffect(() => {
    dispatch(verifyUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (status === 'fulfilled') {
      navigate('/main');
    }
    if (status === 'rejected' && !isVerify) {
      navigate('/');
    }
  }, [status, navigate, isVerify]);

  return <div>TEst</div>;
};

export default Verify;
