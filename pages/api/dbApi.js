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
            items: await basicFetch(`/discover/tv?with_network=213&api_key=${apiKey}`)
        },
        {
            slug: 'trending',
            title: 'Recommended',
            items: await basicFetch(`/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
        },
        {
            slug: 'toprated',
            title: 'Top Rated',
            items: await basicFetch(`/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${apiKey}`)
        },
        {
            slug: 'theatres',
            title: 'Movies in theatres',
            items: await basicFetch(`/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&sort_by=vote_average.desc&api_key=${apiKey}`)
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