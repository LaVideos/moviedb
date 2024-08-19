import React, {FC} from 'react';
import styles from './no-results-component.module.css';
import ErrorIcon from "@mui/icons-material/Error"

interface NoResultsComponentProps{
    query:string
}

const NoResultsComponent: FC<NoResultsComponentProps> = ({query}) => {
    return (
        <>

            {query && <div className={styles.noResultsMessage}>
                <ErrorIcon className={styles.errorIcon}/>
                No results found for "{query}".
            </div>}

        </>
    );
};

export default NoResultsComponent;
