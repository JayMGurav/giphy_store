import { getTrendingGifs } from "@/server/giphy";
import Image from 'next/image'
import { Suspense } from "react"
import FallbackUI from "./FallbackUI";

async function TrendingGifs(){
    const trendingGifs = await getTrendingGifs()

    if(trendingGifs && trendingGifs.data?.length > 0) {
        return (
            <Suspense fallback={<FallbackUI />}>
                {trendingGifs && trendingGifs?.data?.map(({id, image}) => 
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
            </Suspense>
        )
    }


    return (
        <div className="w-full h-80 grid place-content-center">
            No results found
        </div>
    )
} 


function SuspencedTrendingGifss(){
    return (
        <Suspense fallback={<FallbackUI />}>
            <TrendingGifs/>
        </Suspense>
    )
  }


export default SuspencedTrendingGifss;