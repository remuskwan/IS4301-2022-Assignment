import Hero from './components/home/Hero';
import Layout from './components/layout/Layout';
import { auth } from './utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Layout user={user}>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Home</h1>
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <Hero />
        </div>
      </div>
    </Layout>
  );
};

export default App;
