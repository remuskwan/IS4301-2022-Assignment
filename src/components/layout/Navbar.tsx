import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';

import { classNames } from '../../utils/classNames';
import logo from '../../assets/nus-logo.jpeg';
import { logout, signInWithGoogle } from '../../utils/firebase';
import google from '../../assets/google.svg';

type Props = {
  user: User | undefined | null;
};

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Academics', href: '/academics', current: false },
  { name: 'Admission', href: '/admission', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

const Navbar = ({ user = null }: Props) => {
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  {/* TODO: Change to vector and scale accordingly */}
                  <img className='block h-8 w-auto lg:hidden' src={logo} alt='nus-logo' />
                  <img className='hidden h-8 w-auto lg:block' src={logo} alt='nus-logo' />
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map(item => (
                    <Link
                      to={item.href}
                      className={classNames(
                        item.current
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
                          <button
                            onClick={signInWithGoogle}
                            className='m-2 bg-white flex items-center justify-center space-x-2 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500'
                          >
                            <img src={google} className='mx-auto h-5 w-5' alt='google-logo' />
                            <span>Sign in with Google</span>
                          </button>
                        </Menu.Item>
                      ) : (
                        <Menu.Item key='sign-out'>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={classNames(active ? 'bg-gray-100' : '', 'w-full block px-4 py-2 text-sm text-left text-gray-700')}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
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
              {navigation.map(item => (
                <Disclosure.Button
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
