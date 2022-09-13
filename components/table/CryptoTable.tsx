import { UseGetMarkets } from "../../hooks/UseGetMarkets";
import { coinMarket } from "../../types/coinMarket"
import { Table } from "./Table"

const tableData: coinMarket[] =  [
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 21696,
    "market_cap": 415261155103,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 455417007584,
    "total_volume": 35407144071,
    "high_24h": 22259,
    "low_24h": 21414,
    "price_change_24h": 73.79,
    "price_change_percentage_24h": 0.34129,
    "market_cap_change_24h": 1396871957,
    "market_cap_change_percentage_24h": 0.33752,
    "circulating_supply": 19148350,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -68.59782,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 31874.46211,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2022-09-12T04:44:29.316Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1726.27,
    "market_cap": 208337402010,
    "market_cap_rank": 2,
    "fully_diluted_valuation": null,
    "total_volume": 13233333620,
    "high_24h": 1784.78,
    "low_24h": 1720.17,
    "price_change_24h": -34.47457915034374,
    "price_change_percentage_24h": -1.95795,
    "market_cap_change_24h": -4161847729.9689026,
    "market_cap_change_percentage_24h": -1.95852,
    "circulating_supply": 120480337.919274,
    "total_supply": 120480337.919274,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -64.57059,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 399073.95502,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 105.24444727275298,
      "currency": "btc",
      "percentage": 10524.444727275297
    },
    "last_updated": "2022-09-12T04:59:22.694Z"
  }
]



export const CryptoTable = () => {
  const {markets, loading} = UseGetMarkets();
  console.log(loading)
  return (
    <div className="w-full my-8 p-4 mx-auto">
      {
        loading ?
        <p>Loading ...</p>
        :
        <Table data={markets as coinMarket[]} />
      }
    </div>
    )
}