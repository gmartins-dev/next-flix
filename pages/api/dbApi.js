import { apiBase, apiKey } from "../../lib/tmdb";

const basicFetch = async (endpoint) => {
    

    const req = await fetch(`${apiBase}${endpoint}`);
    const json = await req.json();

    return json;
}

export default {
    getHomeList: async () => {
    return[
        {
            slug: 'originals',
            title: 'Netflix Originals',
            items: await basicFetch(`/discover/tv?api_key=${apiKey}&with_networks=213`)
        },
        {
            slug: 'trending',
            title: 'Recommended',
            items: await basicFetch(`/trending/all/week?api_key=${apiKey}`)
        },
        //add top-rated and others categorys
        {
            slug: 'top-rated',
            title: 'Top Rated Movies',
            items: await basicFetch(`/movie/top_rated?api_key=${apiKey}`)
        },
        {
            slug: 'top-rated-tv',
            title: 'Top Rated Series',
            items: await basicFetch(`/tv/top_rated?api_key=${apiKey}`)
        },
        {
            slug: 'action',
            title: 'Action',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=28`)
        },
        {
            slug: 'comedy',
            title: 'Comedy',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=35`)
        },
        {
            slug: 'drama',
            title: 'Drama',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=18`)
        },
        {
            slug: 'horror',
            title: 'Horror',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=27`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=10749`)
        },
        {
            slug: 'documentary',
            title: 'Documentary',
            items: await basicFetch(`/discover/movie?api_key=${apiKey}&with_genres=99`,)
        },
     ]
    },


    //funcao para pegar a informação de um filme aleatorio especifico para usar no featured movie
  getMovieInfo: async (movieId, type) => {

        let info = {};

        if(movieId) {

            switch(type) {

                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?&api_key=${apiKey}`);
                    break;
                
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?&api_key=${apiKey}`);
                    break;
                default:
                    info = null;
                    break;

            }

        }
        return info;
    }
}