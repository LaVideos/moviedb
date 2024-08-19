"use client"

import { FC } from 'react';
import { NavLinkComponent, PseudoAccComponent, SearchHeaderComponent } from '@/components';
import { ENDPOINTS } from '@/constants';
import styles from './header-component.module.css';
import ToggleComponent from '@/components/page-parts/toggle/toggle-component';

const HeaderComponent: FC = () => {
    return (
        <div className={styles.headerMargin}>
            <div className={styles.header}>
                <div className={styles.navLinks}>
                    <NavLinkComponent path={`/${ENDPOINTS.MOVIES}`}>{ENDPOINTS.MOVIES}</NavLinkComponent>
                    <NavLinkComponent path={`/${ENDPOINTS.GENRES}`}>{ENDPOINTS.GENRES}</NavLinkComponent>
                    <NavLinkComponent path={`/${ENDPOINTS.SEARCH}`}>{ENDPOINTS.SEARCH}</NavLinkComponent>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.searchContainer}>
                        <SearchHeaderComponent />
                    </div>
                    <div className={styles.toggle}>
                        <ToggleComponent type={"themeToggle"} />
                    </div>
                    <div className={styles.pseudoAcc}>
                        <PseudoAccComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
