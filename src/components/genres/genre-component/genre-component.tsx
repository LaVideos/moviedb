import React, {FC} from 'react';
import {IGenre} from "@/interfaces";
import {CardComponent, NavLinkComponent} from "@/components";
import Link from "next/link"


interface GenreProps{
    genre:IGenre,
}

const GenreComponent:FC<GenreProps> = ({genre}) => {

    let pathAndQuery={pathname:`/genres/`+genre.name, query: {data: JSON.stringify(genre)}}

    return (
        <CardComponent marginSize={"smallMargin"} isEffected={true}>
            <NavLinkComponent pathAndQuery={pathAndQuery} path={`/${genre.name}`}>{`${genre.name}`}</NavLinkComponent>
        </CardComponent>
    );
};

export default GenreComponent;
