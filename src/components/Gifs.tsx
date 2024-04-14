import SearchedGifs from "./SearchedGifs";
import TrendingGifs from "./TrendingGifs";


async function Gifs({
    search,
  }:{
    search: string
  }){
    return (
        <div className="grid grid-cols-3 gap-4 my-6">
            {search ? <SearchedGifs search={search}/> : <TrendingGifs /> }
        </div>
    )
}

export default Gifs;