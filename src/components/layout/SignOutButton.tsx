import { classNames } from '../../utils/classNames';
import { logout } from '../../utils/firebase';

type Props = {
  active: boolean;
}

const SignOutButton = ({ active }: Props) => {
  return (
    <button onClick={logout} className={classNames(active ? 'bg-gray-100' : '', 'w-full block px-4 py-2 text-sm text-left text-gray-700')}>
      Sign out
    </button>
  );
};

export default SignOutButton;
