import { FC } from "react";
import { UseGetMarkets } from "../../hooks/UseGetMarkets";
import { Loader, NotResults } from "../ui";
import { Table } from "./Table"

interface CryptoTableProps {
  query: string
}

export const CryptoTable: FC<CryptoTableProps> = ({query}) => {
  const {markets, loading} = UseGetMarkets();

  const coins = markets.filter( (coin) => {
    if(query.length) {
      return coin.id.toLowerCase().includes(query.toLowerCase()) || 
      coin.name.toLowerCase().includes(query.toLowerCase())
    }
     return coin
  } )
    

  return (
    <div className="flex justify-center">
      {
        loading ?
          <Loader />
        :
        coins.length ?
        <Table data={coins} />
        :
        <NotResults />
      }
    </div>
    )
}