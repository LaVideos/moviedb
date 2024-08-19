import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './button-component.module.css';

interface IProps {
    onClick?: () => void;
    label: string|React.ReactNode;
    color?: "light" | "dark" | "colorful";
    size?: "small" | "medium" | "large";
    isDisabled?: boolean;
}

const ButtonComponent: FC<IProps> = ({ onClick,
                                label,
                                         color = "light",
                                size = "medium",
                                isDisabled = false }) => {
    return (
        <button
            className={classNames(
                styles.button,
            styles[color],
            styles[size],
    { [styles.disabled]: isDisabled }
)}
    onClick={!isDisabled ? onClick : undefined}
    disabled={isDisabled}
        >
        {label}
        </button>
);
};

export default ButtonComponent;
