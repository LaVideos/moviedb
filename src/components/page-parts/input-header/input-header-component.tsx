"use client"

import React, { FC, useState, useEffect } from 'react';
import styles from './input-header-component.module.css';
import SearchIcon from '@mui/icons-material/Search';

interface InputProps {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    query: string;
}

const InputHeaderComponent: FC<InputProps> = ({ handleChange, query, handleSubmit }) => {
    const [hasText, setHasText] = useState(query.length > 0);

    useEffect(() => {
        setHasText(query.length > 0);
    }, [query]);

    return (
        <div className={styles.searchBox}>
            <button className={styles.btnSearch} aria-label="Search">
                <SearchIcon className={styles.searchIcon} />
            </button>
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setHasText(e.target.value.length > 0);
                    if (handleChange) handleChange(e);
                }}
                onKeyDown={handleSubmit}
                className={`${styles.inputSearch} ${hasText ? styles.inputSearchExpanded : ''}`}
            />
        </div>
    );
};

export default InputHeaderComponent;
