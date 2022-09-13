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
    <div className="w-full my-8 p-4 mx-auto">
      <table className="table-auto border-separate border-spacing-10">
        <thead className="uppercase">
          <tr>
            <th className="text-left">token</th>
            <th>price</th>
            <th>24 H</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.map((item: coinMarket) => (
            <tr key={item.id}>
              <td>
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
              <td>${item.current_price} USD </td>
              <td
                className={
                  item.price_change_percentage_24h > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                <div className=' inline px-2'>
                <FontAwesomeIcon
                  icon={
                    item.price_change_percentage_24h > 0
                    ? faArrowUp
                    : faArrowDown
                  }
                  />
                  </div>
                { item.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
