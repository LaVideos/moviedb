"use client"

import { FC, useEffect } from 'react';
import {RootState} from "@/redux/store";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import classNames from 'classnames/bind';
import styles from './toggle-component.module.css'
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useAppSelector} from "@/hooks/useAppSelector";
import {themeAction} from "@/redux/theme-slice";
const cn = classNames.bind(styles)


interface toggle {
    type?:"themeToggle"|null
}
const ToggleComponent = ({type=null}: toggle) => {
    const MainCn = cn(styles.toggle,styles["large"]);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state:RootState) => state.theme.theme);

    useEffect(() => {
        document.body.className = theme + '-theme';
    }, [theme]);

    const handleToggle = () => {
        dispatch(themeAction.toggleTheme());
    };

    return (
        <div className={MainCn} data-testid={'toggle'} onClick={handleToggle}>
            <input type="checkbox"/>
            {type&&
                <>
                    <div className={cn('moon')}><DarkModeIcon/></div>
                    <div className={cn('sun')}><LightModeIcon/></div>
                </>
            }
        </div>)
};

export default ToggleComponent;
