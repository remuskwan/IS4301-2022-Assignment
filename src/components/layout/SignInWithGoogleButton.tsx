import { signInWithGoogle } from '../../utils/firebase';
import google from '../../assets/google.svg';

const SignInWithGoogleButton = () => {
  return (
    <button
      onClick={signInWithGoogle}
      className='m-2 bg-white flex items-center justify-center space-x-2 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500'
    >
      <img src={google} className='mx-auto h-5 w-5' alt='google-logo' />
      <span>Sign in with Google</span>
    </button>
  );
};

export default SignInWithGoogleButton;
