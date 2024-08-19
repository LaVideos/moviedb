'use client'

import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from './nav-link-component.module.css';
import cn from "classnames"

type IProps = {
    path: string,
    children: React.ReactNode,
    pathAndQuery?:{pathname:string,query:{data:string}}|undefined
}

const NavLinkComponent: FC<IProps> = ({path, children,pathAndQuery}) => {

    let pathname = usePathname();


    return (
        <div>
            <Link href={pathAndQuery?pathAndQuery:path} className={cn(pathname.includes(path.split(" ")[0]) ? styles.activeLink : '',styles.link_style)}>
                {children}
            </Link>
        </div>
    );
};

export default NavLinkComponent;
