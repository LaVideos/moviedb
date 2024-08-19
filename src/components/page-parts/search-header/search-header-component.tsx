'use client'

import React, { useState, useEffect, FC, useRef } from 'react';
import { movieDBService } from "@/services";
import { IMovie } from "@/interfaces";
import styles from './search-header-component.module.css';
import { InputHeaderComponent, LoadingComponent, SearchMovieItemComponent } from "@/components";
import { useRouter } from "next/navigation";
import { ENDPOINTS } from "@/constants";

const SearchHeaderComponent: FC = () => {
    const router = useRouter();
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (query.length > 1) {
            setLoading(true);
            movieDBService.searchMovieByTitle(query)
                .then(data => {
                    setMovies(data.results);
                })
                .finally(() => setLoading(false));
        } else {
            setMovies([]);
        }
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setMovies([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim()) {
            router.push(`/${ENDPOINTS.SEARCH}?query=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div ref={containerRef} className={styles.searchContainer}>
            <InputHeaderComponent handleSubmit={handleSubmit} handleChange={handleChange} query={query} />

            {loading ? (
                <div className={styles.loadingContainer}>
                    <LoadingComponent />
                </div>
            ) : (
                movies.length > 0 && (
                    <div className={styles.moviesContainer}>
                        {movies.map((movie) => (
                            <SearchMovieItemComponent key={movie.id} movie={movie} />
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default SearchHeaderComponent;
