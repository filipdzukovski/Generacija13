import React from 'react';
import PropTypes from 'prop-types';

export function Comments(props){

    console.log(props);
    return(
        <div id='comments'>
            <h2>Comments: {props.cifra}</h2>

            <ol>
                {props.komentari.map((komentar,i)=>{ //komentar = {author:"",content:""}
                    return(
                        <li key={i}>
                            <p>Author: {komentar.author} </p>
                            <p>Content: {komentar.content} </p>
                        </li>
                    )
                })
                
                }
            </ol>
        </div>
    )
}

Comments.propTypes = {
    komentari: PropTypes.arrayOf(PropTypes.object),
    cifra: PropTypes.number.isRequired
}