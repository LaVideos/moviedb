"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ButtonComponent } from "@/components";
import styles from './not-found.module.css';

const NotFoundPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>404 - Page Not Found</h1>
            <p className={styles.notFoundMessage}>
                The page you are looking for does not exist.
            </p>
            <div className={styles.buttonGroup}>
                <ButtonComponent onClick={handleGoBack} label="Go Back" />
                <ButtonComponent onClick={handleGoHome} label="Go Home" />
            </div>
        </div>
    );
};

export default NotFoundPage;
