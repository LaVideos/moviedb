interface IGenre {
    id: number;
    name: string;
}

interface IGenres{
    genres:IGenre[]
}

interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IDiscoverMovieDBResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export type {
    IGenre,IMovie,IDiscoverMovieDBResponse,IGenres
}
