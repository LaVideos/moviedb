import React, {FC} from 'react';
import {IDiscoverMovieDBResponse} from "@/interfaces";
import {MovieComponent, PaginationComponent} from "@/components";
import styles from './movies-component.module.css';


interface MoviesComponentProps {
    movies: IDiscoverMovieDBResponse;
    currentPage: number;
    totalPages: number;
}

const MoviesComponent: FC<MoviesComponentProps> = ({ movies, currentPage, totalPages }) => {
    return (
        <>
            <div className={styles.moviesContainer}>
                {movies.results.map(movie => (<MovieComponent  key={movie.id} movie={movie}/> ))}
            </div>
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} />
        </>
    );
};

export default MoviesComponent;
