import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './card-component.module.css';

interface IProps {
    children: React.ReactNode;
    isEffected?:boolean;
    marginSize?: "noMargin"|"smallMargin"|"mediumMargin"|"largeMargin",
    colorTheme?: "light" | "dark" | "colorful",
    isPadding?:boolean,
    isBorder?:boolean
}

const CardComponent: FC<IProps> = ({ children,
                                       isEffected=false,
                                       marginSize="noMargin",
                                       colorTheme="light",
                                   isPadding=true,isBorder=true
                                  }) => {
    return (
        <div className={
            classNames(styles.cardContainer,
                isEffected&&styles.cardEffects,
                styles[marginSize],
                styles[colorTheme],
                isPadding&&styles.addPadding,isBorder&&styles.addBorder)}>
                {children}
        </div>
    );
};

export default CardComponent;
