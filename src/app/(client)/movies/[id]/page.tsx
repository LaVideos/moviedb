import React, {FC} from 'react';
import {MovieDetailComponent} from "@/components";
import {ISearchParams} from "@/interfaces";




const MoviePage:FC<ISearchParams> = ({searchParams}) => {
    return (
        <>
            <MovieDetailComponent searchParams={searchParams}/>
            </>
    );

};

export default MoviePage;
