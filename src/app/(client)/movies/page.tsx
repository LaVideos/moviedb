import { Metadata } from "next";
import { movieDBService } from '@/services';
import { MoviesComponent } from '@/components';

export const metadata: Metadata = {
    title: 'Movies'
}


const MoviesPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = parseInt(searchParams.page as string) || 1;
    const movies = await movieDBService.getAllDiscoverMovies(page);

    return (
        <div>
            <MoviesComponent movies={movies} currentPage={page} totalPages={movies.total_pages} />
        </div>
    );
};

export default MoviesPage;
