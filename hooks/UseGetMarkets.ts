import { useEffect, useState } from "react";
import { coinMarket } from "../types/coinMarket";

export const UseGetMarkets = () => {

  const [markets, setMarkets] = useState<coinMarket[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect( () => {

    const getCoinsMarket = ( async () => {
      setLoading(true);
      try {
        const resp = await fetch( 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const data = await resp.json();
        setMarkets(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    })
    getCoinsMarket();
  }, [setMarkets])
  return {markets, loading}
};


