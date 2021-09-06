import React from 'react';

export function Domasna(props){

    console.log(props);
    return(
        <div id="domasna">
            <h2>Domasna</h2>

        {props.prikaziPrv === true ? 
        <div style={{color: props.prikaziPrv === false ? 'red' : 'yellow'}}> 
            <p>Ime: {props.korisnik1.ime}</p>
            <p>Username: {props.korisnik1.username}</p>
            <p>E-mail: {props.korisnik1.mail}</p>
        </div> :
        <div> 
            <p>Ime:{props.korisnik2.ime}</p>
            <p>Username: {props.korisnik2.username}</p>
            <p>E-mail: {props.korisnik2.mail}</p>
        </div>
        
        }

        {props.prikaziVtor &&  <div> 
            <p>Ime:{props.korisnik2.ime}</p>
            <p>Username: {props.korisnik2.username}</p>
            <p>E-mail: {props.korisnik2.mail}</p>
        </div>}

        </div>
    )
}