'use server'

import { TrendingGif, TrendingGifResponse } from "@/types/giphy";


export async function getSearchedGifs({ search }:{ search: string }): Promise<TrendingGifResponse | null>{
    try {     
        const response = await fetch(`${process.env.GIPHY_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const gifsData = await response.json()
        
        return {
            data: gifsData?.data?.map(({images, id}:TrendingGif) => ({
                id,
                image:images.fixed_height.webp
            })),
            pagination: gifsData?.pagination
        }
    } catch (error) {
        console.error('Error getting searched gifs', error);
        return null
    }
}

export async function getTrendingGifs(): Promise<TrendingGifResponse | null>{
    try {     
        const response = await fetch(`${process.env.GIPHY_BASE_URL}/trending?api_key=${process.env.GIPHY_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`);
        const trendingGifs = await response.json()
        return {
            data: trendingGifs?.data?.map(({images, id}:TrendingGif) => ({
                id,
                image:images.fixed_height.webp
            })),
            pagination: trendingGifs?.pagination
        }
    } catch (error) {
        console.error('Error getting trending gifs', error);
        return null
    }
}