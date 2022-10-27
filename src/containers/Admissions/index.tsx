import { useAuthState } from 'react-firebase-hooks/auth';
import Layout from '../../components/layout/Layout';
import { auth } from '../../utils/firebase';

const timeline = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
];

const Admission = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Layout user={user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Admission</h1>
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>Admission</h1>
            </div>
          </div>
          <div className='mt-3'>
            <h2 className='text-gray-900 text-lg font-medium'>Timeline</h2>
          </div>
          <div className='prose prose-md text-gray-500 pb-6'>
            <ol>
              {timeline.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admission;
