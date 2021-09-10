import React from 'react';
import PropTypes from 'prop-types';

export class Filmovi extends React.Component {

    render() {

        return (
            <div id="filmovi">
                {this.props.movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            <h1><span>Movie title:</span> {movie.ime}</h1>
                            <p><span>Movie genre:</span> {movie.zanr}</p>
                            <p><span>Release Year:</span> {movie.year}</p>
                            <p><span>Movie Plot:</span>{movie.plot}</p>
                            <a href={movie.imdbLink}> Go to Imdb Site </a>
                            <br />
                            <img src={movie.imgUrl} alt={movie.ime} width={"150"} height={"200"} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

Filmovi.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}