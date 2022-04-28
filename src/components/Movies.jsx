import React from 'react';
import { Movie } from './Movie';

const Movies = (props) => {
    const { movies = []} = props;
    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4 className="not-found offset-s6">Nothing found</h4>
            )}
        </div>
    );
};

export { Movies };
