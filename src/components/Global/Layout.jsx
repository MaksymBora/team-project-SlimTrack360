import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';
import Header from './header/Header';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
          <ToastContainer />
        </Suspense>
      </main>
    </>
  );
};
