import React, {FC} from 'react';
import styles from "./search-movie-item.module.css";
import {IMovie} from "@/interfaces";
import {ENDPOINTS, posterURL_p} from "@/constants";
import Link from 'next/link';


interface  SearchMovieItemProps{
    movie:IMovie
}

const SearchMovieItemComponent:FC<SearchMovieItemProps> = ({movie}) => {
    return (
            <Link href={{pathname:`/${ENDPOINTS.MOVIES}/${movie.id}`,query: {data: JSON.stringify(movie)}}} className={styles.movieContainer}>

            <img
                    src={`${posterURL_p}${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.moviePoster}
                />
                <div className={styles.movieInfo}>
                    <div className={styles.movieTitle}>{movie.title}</div>
                    <div className={styles.movieYear}>{movie.release_date?.split('-')[0]}</div>
                </div>
            </Link>
    );
};

export default SearchMovieItemComponent;
