import React from 'react';

export const Example = ({number,ime,objekt}) =>{

    return(
        <div id="example">
            <h2>Example</h2>
            <p>Number:{number}</p>
            <p>Ime: {ime}</p>
            <p>objekt: {objekt.long} , {objekt.lat}</p>
        </div>
    )
}