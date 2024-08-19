import React, {FC} from 'react';
import {IMovie} from "@/interfaces";
import {ENDPOINTS, posterURL_p} from "@/constants";
import {CardComponent, RateComponent} from "@/components";
import styles from './movie-component.module.css';
import {FiberNewIcon} from "../../page-parts/badge";
import {getCurrentYear} from "@/utils";
import Link from "next/link";

interface MovieProps {
    movie: IMovie;
}

const MovieComponent: FC<MovieProps> = ({ movie }) => {
    const { original_title, vote_average, poster_path, release_date } = movie;

    return (
        <Link href={{pathname:`/${ENDPOINTS.MOVIES}/${movie.id}`,query: {data: JSON.stringify(movie)}}} className={styles.cardContent}>
        <CardComponent isEffected={true} isPadding={false}>
            <div  className={styles.cardContent}>
                {release_date.includes(getCurrentYear()) && (
                    <div className={styles.badgeNew}>
                        <FiberNewIcon/>
                    </div>
                )}
                {poster_path ? (
                    <img
                        className={styles.poster}
                        src={`${posterURL_p + poster_path}`}
                        alt={`${original_title}`}
                    />
                ) : (
                    <img
                        className={styles.poster}
                        src="https://phti.by/wp-content/themes/bb/acf-blocks/blocks/block-9/img/not-found.png"
                        alt="Not found"
                    />
                )}
                <div className={styles.rating}>
                    <RateComponent initialRating={vote_average} numTotalStars={10}/>
                </div>
            </div>
        </CardComponent></Link>
    );
};

export default MovieComponent;
