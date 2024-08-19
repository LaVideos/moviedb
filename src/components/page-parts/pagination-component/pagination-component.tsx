'use client'

import React, { FC } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ButtonComponent } from "@/components";
import { Pagination} from "@mui/material";
import { makeStyles} from "@mui/styles";
import styles from './pagination-component.module.css';
import {useAppSelector} from "@/hooks/useAppSelector";


interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
}




const PaginationComponent: FC<PaginationComponentProps> = ({ currentPage, totalPages }) => {
    let theme = useAppSelector(state => state.theme.theme);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages > 500) {
        totalPages = 500;
    }

    const handlePageChange = (event: React.ChangeEvent<unknown> | null, page: number) => {
        if (page >= 1 && page <= totalPages) {
            router.push(createPageURL(page));
        }
    };

    return (
        <div className={styles.paginationContainer}>
            <ButtonComponent
                onClick={() => handlePageChange(null, currentPage - 10)}
                isDisabled={currentPage <= 10}
                label={"Prev 10"}
            />
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color={theme==="dark"?"primary":"primary"}
            />
            <ButtonComponent
                onClick={() => handlePageChange(null, currentPage + 10)}
                isDisabled={currentPage >= totalPages - 9}
                label={"Next 10"}
            />
        </div>
    );
};

export default PaginationComponent;
