import { classNames } from "../../utils/classNames";

type Module = {
  code: string;
  title: string;
};

type Props = {
  data: Module[];
};

const Table = ({ data = [] }: Props) => {
  return (
    <div className='mt-8 flex flex-col'>
      <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle'>
          <div className='overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5'>
            <table className='min-w-full border-separate' style={{ borderSpacing: 0 }}>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                  >
                    Module Code
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                  >
                    Module Title
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                {data.map((module, moduleIdx) => (
                  <tr key={module.code}>
                    <td
                      className={classNames(
                        moduleIdx !== data.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                      )}
                    >
                      {module.code}
                    </td>
                    <td
                      className={classNames(
                        moduleIdx !== data.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                      )}
                    >
                      {module.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
