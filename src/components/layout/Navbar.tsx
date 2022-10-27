import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'firebase/auth';

import { classNames } from '../../utils/classNames';
import logo from '../../assets/nus-logo.svg';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import SignOutButton from './SignOutButton';
import { logout } from '../../utils/firebase';

type Props = {
  user: User | undefined | null;
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admission', href: '/admission' },
];

const Navbar = ({ user = null }: Props) => {
  const { pathname } = useLocation();

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link to='/'>
                    <img className='h-6 w-auto' src={logo} alt='nus-logo' />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.href === pathname
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-4 flex-shrink-0'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100'>
                      <span className='sr-only'>Open user menu</span>
                      {user?.photoURL ? (
                        <img className='h-8 w-8 rounded-full' src={user.photoURL} alt='' />
                      ) : (
                        <UserCircleIcon className='h-8 w-8 text-gray-500' />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute -right-2 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {!user ? (
                        <Menu.Item key='sign-in-google'>
                          <SignInWithGoogleButton />
                        </Menu.Item>
                      ) : (
                        <Menu.Item key='sign-out'>{({ active }) => <SignOutButton active={active} />}</Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              <>
                {navigation.map(item => (
                  <Disclosure.Button
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.href === pathname
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                {!user ? (
                  <div className='flex justify-center'>
                    <SignInWithGoogleButton />
                  </div>
                ) : (
                  <div>
                    <div className='flex items-center px-5'>
                      <div className='flex-shrink-0'>
                        {user?.photoURL && <img className='h-8 w-8 rounded-full' src={user.photoURL} alt='' />}
                      </div>
                      <div className='ml-3 min-w-0 flex-1'>
                        <div className='truncate text-base font-medium text-gray-800'>{user.displayName}</div>
                        <div className='truncate text-sm font-medium text-gray-500'>{user.email}</div>
                      </div>
                    </div>
                    <Disclosure.Button
                      onClick={logout}
                      className='block w-full border-l-4 py-2 pl-3 pr-4 text-left text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                )}
              </>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
