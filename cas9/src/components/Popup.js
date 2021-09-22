import React from 'react';
import PropTypes from 'prop-types';

export function Popup(props){

    return(
        <div id="popup">
            <button
                onClick={props.zatvoriSlika}
                className="close-popup"
            >
                &times;
            </button>
            <div className="popup-container">
            <button
                onClick={props.deletePhoto}
                className="delete-image"
            >
                D
            </button>
                <img src={props.selektiranaSlika} alt={""} />
            </div>
        </div>
    )
}

Popup.propTypes={
    selektiranaSlika:PropTypes.string,
    zatvoriSlika:PropTypes.func,
    deletePhoto:PropTypes.func
}