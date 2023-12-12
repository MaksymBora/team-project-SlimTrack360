import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';

export const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
