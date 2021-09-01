import React from 'react';

function Hello(props) {

    console.log(props);
    return(
        <div>
            <h2>This is Hello Component</h2>
            <p>My name is {props.ime}</p>
        </div>
    )
}

export default Hello;