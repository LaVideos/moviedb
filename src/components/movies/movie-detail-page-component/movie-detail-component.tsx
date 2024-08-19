import React, {FC} from 'react';
import {IGenre, IMovie} from "@/interfaces";
import styles from './movie-detail-component.module.css';
import {FaCalendarAlt, FaFilm, FaLanguage, FaUsers, FaVideo} from 'react-icons/fa';
import {CardComponent, NavLinkComponent, RateComponent, SimilarMoviesComponent} from "@/components";
import {getGenreById, roundedRating} from "@/utils";
import {ENDPOINTS, posterURL_p} from "@/constants";

interface MovieDetailPageComponentProps {
    searchParams: { data: string };
}

const MovieDetailComponent: FC<MovieDetailPageComponentProps> = async ({ searchParams }) => {
    const movie: IMovie = JSON.parse(searchParams.data);
    const genres: IGenre[] = await getGenreById(movie.genre_ids);



    return (
        <div>
            <div className={styles.movieDetailContainer}>
                <div className={styles.posterSection}>
                    <img src={`${posterURL_p}${movie.poster_path}`} alt={movie.title}
                         className={styles.poster}/>
                </div>
                <div className={styles.detailsSection}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <div className={styles.originalTitle}>
                        <FaFilm className={styles.icon}/> Original Title: {movie.original_title}
                    </div>
                    <div className={styles.releaseDate}>
                        <FaCalendarAlt className={styles.icon}/> Release
                        Date: {new Date(movie.release_date).toLocaleDateString()}
                    </div>
                    <div className={styles.genres}>
                        <FaFilm className={styles.icon}/>
                        <div className={styles.genresContainer}>{

                            genres.map(genre => <NavLinkComponent  key={genre.id} path={genre.name} pathAndQuery={{
                                pathname: `/${ENDPOINTS.GENRES}/${genre.name}`,
                                query: {data: JSON.stringify(genre)}
                            }}>
                                <CardComponent marginSize={"smallMargin"}
                                               children={genre.name}
                                               isEffected={true}/></NavLinkComponent>)
                        }</div>
                    </div>
                    <div className={styles.language}>
                        <FaLanguage className={styles.icon}/> Original Language: {movie.original_language}
                    </div>
                    <div className={styles.popularity}>
                        <FaUsers className={styles.icon}/> Popularity: {movie.popularity.toFixed(2)}
                    </div>
                    <div className={styles.overview}>{movie.overview}</div>
                    <div className={styles.rating}>
                        <div><span className={styles.rating_span}>Rating:</span>
                            <span className={styles.voteAverage}> {roundedRating(movie.vote_average)} / 10</span>
                            <span className={styles.voteCount}>({movie.vote_count} votes)</span>
                        </div>
                        <div>
                            <RateComponent initialRating={movie.vote_average} numTotalStars={10}/>
                        </div>
                    </div>
                    {movie.adult && (
                        <div className={styles.adultContentWarning}>
                            <FaVideo className={styles.icon}/> This movie is for adults only.
                        </div>
                    )}
                </div>
            </div>
            <SimilarMoviesComponent id={movie.id}/>
        </div>
    );
};

export default MovieDetailComponent;
