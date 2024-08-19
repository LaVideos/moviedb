import React from 'react';
import {Metadata} from "next";
import {SearchFormComponent} from "@/components";

export const metadata: Metadata = {
    title: 'SearchQueryLayout metadata'
}


type Props = { children: React.ReactNode }

const SearchQueryLayout = ({children}: Props) => {
    return (
        <div>
            <SearchFormComponent/>
            {children}
        </div>
    );
};

export default SearchQueryLayout;
