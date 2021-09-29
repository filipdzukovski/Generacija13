import React from 'react';
import PropTypes from 'prop-types';

export function CommentsComponent(props){

    console.log(props)
    return(
        <div id="comments-component">
            <h2>Comments Component</h2>
        </div>
    )
}

CommentsComponent.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    error:PropTypes.string
}