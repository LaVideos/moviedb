import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MoviesLayout metadata'
}


type Props = { children: React.ReactNode }

const SearchLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SearchLayout;
