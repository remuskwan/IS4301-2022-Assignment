import { ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-full'>
      <Navbar />
      <main className='mt-8 pb-8'>{children}</main>
      <footer>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='border-t border-gray-200 py-8 text-center text-sm text-gray-500'>
            <span className='block sm:inline'>&copy; National University of Singapore. </span>{' '}
            <span className='block sm:inline'>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
