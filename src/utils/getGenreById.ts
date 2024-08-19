import {movieDBService} from "@/services";

export const getGenreById = async (genre_ids: number[]) => {
    return await Promise.all(genre_ids.map(async genre => await movieDBService.getMovieByGenreId(genre)));
}
