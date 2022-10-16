import Table from '../../components/academics/Table';
import Layout from '../../components/layout/Layout';
const modules = [
  { code: 'BT1101', title: 'Introduction to Business Analytics' },
  { code: 'BT2101', title: 'Econometrics Modelling for Business Analytics' },
  { code: 'BT2102', title: 'Data Management and Visualisation' },
  { code: 'BT2103', title: 'Optimization Methods in Business Analytics' },
];

const Academics = () => {
  return (
    <Layout>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='sr-only'>Academics</h1>
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-center'>
              <div className='sm:flex-auto'>
                <h1 className='text-xl font-semibold text-gray-900'>Academics</h1>
                <p className='mt-2 text-sm text-gray-700'>A list of modules taught at NUS.</p>
              </div>
            </div>
            <Table data={modules} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Academics;
