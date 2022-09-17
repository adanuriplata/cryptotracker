import { FC } from 'react';
import { coinMarket } from '../../types/coinMarket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface TableProps {
  data: coinMarket[];
}

export const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className="container">
      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-amber-500">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-base font-medium tracking-wider text-left text-white "
            >
              Token
            </th>
            <th
            scope="col"
            className="py-3 px-6 text-base font-medium tracking-wider text-left text-white "
            >Price</th>
            <th
            scope="col"
            className="py-3 px-6 text-base font-medium tracking-wider text-left text-white "
            >24 H</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: coinMarket) => (
            <tr key={item.id} className="hover:bg-gray-400 dark:hover:bg-gray-900">
              <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                <div className="flex space-x-2 items-center">
                  <div>
                    <Image
                      src={item.image}
                      width="25"
                      height="25"
                      alt={item.name}
                    />
                  </div>
                  <div className="text-left">
                    <p> {item.name} </p>
                    <p className="text-sky-400/60"> {item.symbol}</p>
                  </div>
                </div>
              </td>
              <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>${item.current_price} USD </td>
              <td
                className={`${
                  item.price_change_percentage_24h > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                } py-4 px-6 text-sm font-medium whitespace-nowrap`}
              >
                <div className="inline px-2">
                  <FontAwesomeIcon
                    icon={
                      item.price_change_percentage_24h > 0
                        ? faArrowUp
                        : faArrowDown
                    }
                  />
                </div>
                {item.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
