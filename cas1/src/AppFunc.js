import React from 'react';
import Hello from './components/Hello';
import {Goodbye} from './components/Goodbye';
import './css/AppFunc.css';

export function AppFunc() {

    const name1 = 'Filip';
    const name2 = 'Meto';
    const booleanVrednost = false;

    return(
        <div id="app-func">  
            <Hello ime={name1} />
            <h2 className="nesto">React Rocks !!!</h2>
            <Hello ime={name2} />
            <hr/>
            <p style={{backgroundColor:'red',color:'white'}}>
                This is a Paragraph 1+1 = {1+1}
                <br/>
                My name is {booleanVrednost ? name1 : name2}
            </p>
            <Goodbye />
        </div> 
    )
}