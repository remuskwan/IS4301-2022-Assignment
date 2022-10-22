import { Link } from 'react-router-dom';
import logo from '../../assets/nus-logo-white.svg';
import utownGreen from '../../assets/utown-green.jpeg';
// import NusCoat from '../vectors/NusCoat';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
          <div className='absolute inset-0'>
            <img className='h-full w-full object-cover' src={utownGreen} alt='UTown Green' />
            <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            {/* <div className='relative flex justify-center items-center'>
              <div className='absolute inset-x-0 block h-26 w-auto'>
                <NusCoat />
              </div>
            </div> */}
            <div className='flex flex-col'>
              <img src={logo} className='block h-44 w-auto' alt='nus-logo'/>
              {/* <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-white'>National University</span>
                <span className='block text-indigo-200'>of Singapore</span>
              </h1> */}
            </div>
            <p className='mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl'>
              NUS is a leading research university in Asia.
            </p>
            <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
              <div className='space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0'>
                <Link
                  to='/academics'
                  className='flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8'
                >
                  Academics
                </Link>
                <Link
                  to='/admission'
                  className='flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8'
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
