import { Metadata } from "next";
import { movieDBService } from '@/services';
import {MoviesComponent, PaginationComponent, NoResultsComponent, CardComponent} from '@/components';
import { FC } from "react";
import { IDiscoverMovieDBResponse } from "@/interfaces";
import styles from './search-query-page.module.css';

export const metadata: Metadata = {
    title: 'SearchQuery'
}

interface SearchQueryPageProps {
    searchParams: { query: string, page: string };
}

const SearchQueryPage: FC<SearchQueryPageProps> = async ({ searchParams }) => {
    const query = searchParams.query;
    const page = parseInt(searchParams.page as string) || 1;
    let movies: IDiscoverMovieDBResponse | any = {};

    if (query) {
        movies = await movieDBService.searchMovieByTitle(query, page);
    }

    return (
        <div className={styles.searchResultsContainer}>
            {query&&<CardComponent isEffected={false}>
                <div className={styles.searchResultsTitle}>Search Results for "{query}"</div>
            </CardComponent>}
            {movies?.results?.length > 0 ? (
                <MoviesComponent currentPage={page} totalPages={movies.total_pages} movies={movies} />
            ) : (
                <NoResultsComponent query={query} />
            )}
        </div>
    );
};

export default SearchQueryPage;
