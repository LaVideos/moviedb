import React from 'react';
import {movieDBService} from "@/services";
import {GenreComponent} from "@/components";
import styles from "./genres-component.module.css"


const GenresComponent = async () => {


    let genres = await movieDBService.getAllGenres();



    return (
        <>
            <div className={styles.genresContainer}>{
                genres.genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)
            }</div>

        </>
    );
};

export default GenresComponent;
