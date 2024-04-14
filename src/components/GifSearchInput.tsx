'use client'
 
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import throttle from 'lodash.throttle'

function GifSearchInput(){
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { replace} = useRouter()

    const throttledFn = throttle(function(inputValue: string){
        const params = new URLSearchParams(searchParams);
        if(inputValue){
            params.set('search', inputValue);
        } else {
            params.delete('search');
        } 
        replace(`${pathname}?${params.toString()}`)
    }, 5000)
    
    return (
        <input 
            placeholder="search gifs" 
            type="text"  
            className="w-full p-2 rounded-md border shadow-sm"
            onChange={(e) => throttledFn(e.target.value)}
        />
    )
}

export default GifSearchInput;