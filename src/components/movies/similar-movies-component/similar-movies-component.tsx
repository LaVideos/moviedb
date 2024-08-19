import React, {FC} from 'react';

import {IDiscoverMovieDBResponse} from "@/interfaces";
import {movieDBService} from "@/services";
import {CardComponent, MovieComponent} from "@/components";
import styles from "./similar-movies-component.module.scss"
import ScrollControls from "@/components/page-parts/scroll-control/scroll-controls-component";

interface SimilarMoviesProps {
    id: number;
}

const SimilarMoviesComponent: FC<SimilarMoviesProps> = async ({ id }) => {
    const movies: IDiscoverMovieDBResponse = await movieDBService.getSimilarMovies(id);

    if (!movies.results.length) {
        return <div className={styles.noMoviesContainer}>
            <CardComponent isEffected={false} ><div className={styles.noMovies}>No similar movies found.</div></CardComponent>
        </div>;
    }

    return (
        <div className={styles.trending}>
            <div className={styles.container}>
                <ScrollControls targetId="slider" />
                <div className={styles.row_container} id="slider">
                    {movies.results.map((item) => (
                        <CardComponent isBorder={false} key={item.id} isPadding={true} isEffected={false}>
                            <MovieComponent movie={item} />
                        </CardComponent>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimilarMoviesComponent;
