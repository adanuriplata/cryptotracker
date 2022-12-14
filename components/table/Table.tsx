import { FC } from 'react';
import { coinMarket } from '../../types/coinMarket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { currency } from '../../utils/';

interface TableProps {
  data: coinMarket[];
}

export const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className="container bg-slate-800 shadow-md my-6 rounded">
      <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
        <thead className="bg-gray-100 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-base font-medium tracking-wider text-left text-white "
            >
              Token
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-base font-medium tracking-wider text-right text-white "
            >
              Price
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-base font-medium tracking-wider text-right text-white "
            >
              24 H
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: coinMarket) => (
            <tr
              key={item.id}
              className="hover:bg-gray-400 dark:hover:bg-orange-900"
            >
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex space-x-2 items-center">
                  <div>
                    <Image
                      src={item.image}
                      width="28"
                      height="28"
                      alt={item.name}
                    />
                  </div>
                  <div className="text-left">
                    <p> {item.name} </p>
                    <p className="text-sky-400/60"> {item.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">
                {currency(item.current_price)} USD{' '}
              </td>
              <td
                className={`${
                  item.price_change_percentage_24h > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                } py-4 px-6 text-sm font-medium whitespace-nowrap text-right`}
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
