import Layout from '../../components/layout/Layout';

const timeline = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
];

const Admission = () => {
  return (
    <Layout>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Admission</h1>
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>Admission</h1>
            </div>
          </div>
          <span className={'text-gray-900 first-line:text-sm font-medium'}>Timeline</span>
          <div className='prose prose-lg text-gray-500 pb-6'>
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
