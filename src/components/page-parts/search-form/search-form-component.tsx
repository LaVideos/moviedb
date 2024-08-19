'use client'

import React, { useState, FC } from 'react';
import { useRouter } from "next/navigation";
import { InputHeaderComponent, ButtonComponent, InputSearchComponent } from "@/components";
import { ENDPOINTS } from "@/constants";
import { SearchIcon } from "@/components/page-parts/badge";
import styles from './search-form-component.module.css';

const SearchFormComponent: FC = () => {
    const router = useRouter();
    const [query, setQuery] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/${ENDPOINTS.SEARCH}?query=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div className={styles.searchFormContainer}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <InputSearchComponent handleChange={handleChange} size={"large"} query={query} />
                <ButtonComponent size={"small"}  label={<span className={styles.svgContainer}> <SearchIcon /></span>} />
            </form>
        </div>
    );
};

export default SearchFormComponent;
