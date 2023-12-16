import List from '../../components/Recommended/List/List';
import Title from '../../components/Recommended/Title/Title';
import Image from '../../components/Recommended/Image/Image';
import { Loader } from '../../utils/Loader';

import {
  selectIsLoading,
  selectError,
} from '../../Redux/recommended/selectors';
import { fetchFood } from '../../Redux/recommended/operations';

import { Wrap, InnerWrap } from './Recommented.style';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Recommented = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <Wrap>
      <Title />
      <InnerWrap>
        <Image />
        {isLoading && <Loader />}
        {!isError ? <List /> : <p>Error ... </p>}
      </InnerWrap>
    </Wrap>
  );
};

export default Recommented;
