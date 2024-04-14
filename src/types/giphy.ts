export interface TrendingGif {
    id: string;
    images: {
        fixed_height: {
            webp: string;
        }
    }
}

export interface TrendingGifResponse {
    data: Array<{
        id: string;
        image: string;
    }>;
    pagination: {
        total_count: number;
        count: number;
        offset: number;
    }
}