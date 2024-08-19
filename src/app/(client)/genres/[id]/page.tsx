import React, {FC} from 'react';
import {IDiscoverMovieDBResponse, IGenre, ISearchParams} from "@/interfaces";
import {movieDBService} from "@/services";
import {MoviesComponent} from "@/components";





const MoviesByGenrePage:FC<ISearchParams> =async ({searchParams}) => {

    console.log(searchParams)
    const movies:IDiscoverMovieDBResponse = await movieDBService.getMoviesByGenre(JSON.parse(searchParams.data).id,searchParams.page&&JSON.parse(searchParams.page));


    return (
        <>
            <MoviesComponent currentPage={movies.page} totalPages={movies.total_pages} movies={movies}/>
        </>
    );
};

export default MoviesByGenrePage;
