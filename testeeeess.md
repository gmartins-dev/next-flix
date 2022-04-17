
export default async(endpoint) => {
    

        const result = await fetch(`${apiBase}${endpoint}`);
        const json = await result.json();

        res.status(200).json({

         list: json.results   

        });
  }

  
import { apiBase, apiKey, endpoint } from "../../lib/database";


export default {
    getHomeList: async () => {
    return[
        {
            slug: 'originals',
            title: 'Netflix Originals',
            items: await basicFetch(`/discover/tv?with_network=213&api_key=${apiKey}`)
        },
        {
            slug: 'trending',
            title: 'Recommended',
            items: await basicFetch(`/trending/all/week&api_key=${apiKey}`)
        },
        {
            slug: 'toprated',
            title: 'Top Rated',
            items: await basicFetch(`/movie/top_rated&api_key=${apiKey}`)
        },
        {
            slug: 'action',
            title: 'Action',
            items: await basicFetch(`/discover/movie?with_genres=28&api_key=${apiKey}`)
        },
        {
            slug: 'comedy',
            title: 'Comedy',
            items: await basicFetch(`/discover/movie?with_genres=35&api_key=${apiKey}`)
        },
        {
            slug: 'horror',
            title: 'Horror',
            items: await basicFetch(`/discover/movie?with_genres=27&api_key=${apiKey}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${apiKey}`)
        },
        {
            slug: 'documentary',
            title: 'Documentary',
            items: await basicFetch(`/discover/movie?with_genres=99&api_key=${apiKey}`)
        },
     ]
}
}