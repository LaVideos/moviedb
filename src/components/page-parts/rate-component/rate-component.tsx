'use client'

import React, { useState } from 'react';
import { StarComponent } from "@/components/page-parts/star-component/star-component";
import styles from './rate-component.module.css';

interface RateComponentProps {
    numTotalStars?: number;
    initialRating: number;
}

const RateComponent: React.FC<RateComponentProps> = ({ numTotalStars = 10, initialRating }) => {
    const [numSelectedStars, setNumSelectedStars] = useState<number>(Math.floor(initialRating));
    const [numHoveringStars, setNumHoveringStars] = useState<number | null>(null);
    const [isUserHovering, setIsUserHovering] = useState<boolean>(false);

    let color = '#d5bf1e';

    function getColor(
        isUserHovering: boolean,
        i: number,
        numSelectedStars: number,
        numHoveringStars: number | null
    ): string {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return (i < (threshold ?? 0)) ? color : "grey";
    }

    return (
        <>
            <div
                className={styles.stars}
                onMouseEnter={() => setIsUserHovering(true)}
                onMouseLeave={() => setIsUserHovering(false)}
            >
                {Array.from({ length: numTotalStars }).map((_, i) => (
                    <StarComponent
                        key={i}
                        color={getColor(isUserHovering, i, numSelectedStars, numHoveringStars)}
                        handleSelect={() => setNumSelectedStars(i + 1)}
                        handleHover={() => setNumHoveringStars(i + 1)}
                        size={17}
                    />
                ))}
            </div>
        </>
    );
};

export default RateComponent;
