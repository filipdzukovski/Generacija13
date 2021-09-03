import React from 'react';
import {Welcome} from './components/Welcome';
import {Comments} from './components/Comments';
import {Student} from './components/Student';
import {StudentClass} from './components/StudentClass';
import {FruitList} from './components/FruitList';
import {Example} from './components/Example';

const name = "Filip"; 

var student = {
  name: 'Filip',
  address:'Mavrovo',
  indexNum: 141088
};

const number=5;
const ime= "Pero";
const objekt={
  long:"42.5",
  lat:"44.3"
}

let listaNaOvosja=["apple","peach","banana"];

export function App(){

  return(
      <div id="app">
        <h2>Setup Works</h2>
        <Example number={number} ime={ime} objekt={objekt}/>
        <StudentClass ucenik={student}/>
        <Welcome ime={name} prezime={"Dzukovski"} godini={25}>
          Hey
        </Welcome>
        <Comments hasComments={false} multipleComments={true} student={student} />
        <Welcome ime={"Pero"} prezime={"Perovski"} godini={20} dopolnitelenAtribut="randomValue" />
        <Student student={student} />
        <FruitList listOfFruits={listaNaOvosja} />
      </div> 
  )
}