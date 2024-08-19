import React from 'react';

type Props = { children: React.ReactNode }

const MoviesByGenreLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesByGenreLayout;
