import React from 'react';
import PropTypes from 'prop-types';

export function Movies(props){

    return(
        <div id="movies">
            {props.listaFilmovi.map((film,i)=>{
                return(
                <div key={i}>
                    <h1><span>Movie title:</span> {film.ime}</h1>
                    <p><span>Movie genre:</span> {film.zanr}</p>
                    <p><span>Release Year:</span> {film.year}</p>
                    <p><span>Movie Plot:</span>{film.plot}</p>
                    <a href={film.imdbLink}> Go to Imdb Site </a>
                    <br/>
                    <img src={film.imgUrl} alt={film.ime} width={"150"} height={"200"}/>
                </div>
                )
            })}
        </div>
    )

}

Movies.propTypes = {
    listaFilmovi: PropTypes.arrayOf(PropTypes.object).isRequired
}