import { Metadata } from "next";
import { movieDBService } from '@/services';
import { MoviesComponent } from '@/components';

export const metadata: Metadata = {
    title: 'Movies'
}


const SearchPage = async () => {
    return (
        <div>
        </div>
    );
};

export default SearchPage;
