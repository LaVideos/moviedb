"use client"

import React, { FC, useEffect, useState } from 'react';
import styles from "./scroll-controls.module.css";
import { ButtonComponent } from "@/components";

interface ScrollControlsProps {
    targetId: string;
}

const ScrollControls: FC<ScrollControlsProps> = ({ targetId }) => {
    const [isAtStart, setIsAtStart] = useState<boolean>(true);
    const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

    const scrollLeft = () => {
        const slider = document.getElementById(targetId);
        if (slider) {
            slider.scrollLeft -= 300;
            checkScrollPosition(slider);
        }
    };

    const scrollRight = () => {
        const slider = document.getElementById(targetId);
        if (slider) {
            slider.scrollLeft += 300;
            checkScrollPosition(slider);
        }
    };



    const checkScrollPosition = (slider: HTMLElement) => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        const threshold = 5;

        setIsAtStart(slider.scrollLeft <= threshold);
        setIsAtEnd(slider.scrollLeft >= maxScrollLeft - threshold);
    };

    useEffect(() => {
        const slider = document.getElementById(targetId);
        if (slider) {
            checkScrollPosition(slider);
            const handleScroll = () => {
                checkScrollPosition(slider);
            };
            slider.addEventListener('scroll', handleScroll);
            return () => slider.removeEventListener('scroll', handleScroll);
        }
    }, [targetId]);


    return (
        <div className={styles.controls}>
            <ButtonComponent isDisabled={isAtStart} onClick={scrollLeft} label={"prev"} />
            <ButtonComponent isDisabled={isAtEnd} onClick={scrollRight} label={"next"} />
        </div>
    );
};

export default ScrollControls;
