import {Base_Url, ENDPOINTS, headers} from "@/constants";
import {IDiscoverMovieDBResponse, IGenre, IGenres, IMovie} from "@/interfaces";





export const movieDBService  ={
        getAllDiscoverMovies: async (page: number = 1): Promise<IDiscoverMovieDBResponse> => {
            const response = await fetch(`${Base_Url}/${ENDPOINTS.DISCOVER}/${ENDPOINTS.MOVIE}?page=${page}&limit=20`, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
            }

            return await response.json();
        },

    getAllGenres:async ():Promise<IGenres>=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.GENRE}/${ENDPOINTS.MOVIE}/${ENDPOINTS.LIST}`, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
        }

        return response.json()
    },

    getMoviesByGenre:async (id:number|string,page:number|string=1)=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.DISCOVER}/${ENDPOINTS.MOVIE}?${ENDPOINTS.WITH_GENRES}=${id}&page=${page}`,{
                method: 'GET',
                headers: headers,
            });

        if (!response.ok) {
        }

        return response.json()
    },

    getMovieByGenreId:async (id:number):Promise<IGenre>=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.GENRE}/${id}`,{
                method: 'GET',
                headers: headers,
            });

        if (!response.ok) {
        }

        return response.json()
    },

    getTopRatedMovies:async ():Promise<IDiscoverMovieDBResponse>=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.TOP_RATED}`,{
                method: 'GET',
                headers: headers,
            });



        return response.json()
    },

    getSimilarMovies:async (id:number):Promise<IDiscoverMovieDBResponse>=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.MOVIE}/${id}/${ENDPOINTS.SIMILAR}`,{

            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
        }

        return response.json()
    },

    searchMovieByTitle:async (title:string,page:number=1):Promise<IDiscoverMovieDBResponse>=>{
        const response = await fetch(`${Base_Url}/${ENDPOINTS.SEARCH}/${ENDPOINTS.MOVIE}?${ENDPOINTS.QUERY}=${title}&${ENDPOINTS.PAGE}=${page}`,{
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
        }

        return response.json()

    }


}
