import React from 'react';
import {Domasna} from './Domasna';
import { Comments } from './Comments';
import {Car} from './Car';

const user1 = {
    ime: "Filip",
    username:'filipdz',
    mail: `filipdzukovski@yahoo.com`
}

const user2 = {
    ime: "Pero",
    username:'Perica',
    mail:'pericapero@gmail.com'
}

let comments = [
    {author:"Filip",content:"This is my first comment"},
    {author:"Meto",content:"This is my second Comment"},
    {author:"Stefan",content:"This is getting ridiculous"}
]

let registracija = [
    {grad:{naselba:"Nesto1",ulica:"Ulica1"},oznaka: "SK-0000-AA"},
    {grad:{naselba:"Nesto2",ulica:"Ulica2"},oznaka: "GV-9999-AB"},
    {grad:{naselba:"Nesto3",ulica:"Ulica3"},oznaka:"DB-2323-AC"}
]

let cars = [
    {brand: "Ford", model: "Fiesta", year:2005,plates:registracija[0]},
    {brand: "Opel", model: "Astra", year:2010,plates:registracija[1]},
    {brand: "Zastava", model: '101', year:1984,plates:registracija[2]}
]



export function App(){

    return(
        <div id='app'>
            <h2>App</h2>
            <Car datum="06-09-2021" vozila={cars} />
            <Domasna 
                korisnik1={user1} 
                korisnik2={user2}
                prikaziPrv={true}
                prikaziVtor={true}
                />
            <Comments komentari={comments} cifra={5}/>
        </div>
    )
}