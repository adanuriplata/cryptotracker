import { UseGetMarkets } from "../../hooks/UseGetMarkets";
import { coinMarket } from "../../types/coinMarket"
import { Loader } from "../ui";
import { Table } from "./Table"

export const CryptoTable = () => {
  const {markets, loading} = UseGetMarkets();

  return (
    <div className="flex justify-center">
      {
        loading ?
          <Loader />
        :
        <Table data={markets as coinMarket[]} />
      }
    </div>
    )
}