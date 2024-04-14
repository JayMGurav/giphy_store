import { getSearchedGifs } from "@/server/giphy";
import Image from 'next/image'
import { Suspense } from "react";
import FallbackUI from "./FallbackUI";
import { resourceUsage } from "process";


async function SearchedGifs({
    search,
  }:{
    search: string
  }){
    
    const searchedGifs = await getSearchedGifs({search})

    if(searchedGifs && searchedGifs.data?.length > 0) {
        return (
            <>
                {searchedGifs && searchedGifs?.data?.map(({id, image}) => 
                    <div className="bg-gray-200">
                        <Image
                            key={id}
                            src={image}
                            width={200}
                            height={200}
                            alt="gifs"
                            unoptimized
                            className="h-[200px] w-full rounded-md object-center object-cover"
                        />  
                    </div>
            )}
            </>
        )
            
    }
    
    return (
        <div className="w-full h-80 grid place-content-center">
            No results found
        </div>
    )
}

function SuspencedSearchedGifs({
    search,
  }:{
    search: string
  }){
    return (
        <Suspense fallback={<FallbackUI />}>
            <SearchedGifs search={search}/>
        </Suspense>
    )
  }


export default SuspencedSearchedGifs;