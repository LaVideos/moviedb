import React from 'react';
import {Metadata} from "next";
import {GenresComponent} from "@/components";

export const metadata: Metadata = {
    title: 'GenresLayout metadata'
}


type Props = { children: React.ReactNode }

const GenresLayout = ({children}: Props) => {
    return (
        <div>
            <GenresComponent/>
            {children}
        </div>
    );
};

export default GenresLayout;
