import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';
import { Header } from './Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
