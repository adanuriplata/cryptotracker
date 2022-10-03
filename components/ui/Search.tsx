import { ChangeEvent, FC } from "react"

interface SearchProps {
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void

}

export const Search: FC<SearchProps> = ({handleChange}) => {

  // const getSearch = async (query: string) => {
  //   try {
  //     const resp = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
  //     const data = await resp.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
  //   const queryTerm = evt.target.value
  //   // queryTerm.length > 3 && getSearch(queryTerm);

  // }

  return (
    <div>
      <div className="text-center mt-6">
        <label htmlFor="search" className="mr-4">
          Search Crypto 🔎 
        </label>
        <input 
          className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          name="search" 
          type="text" 
          onChange={ (evt) => handleChange(evt) } />
      </div>
    </div>
  )
}