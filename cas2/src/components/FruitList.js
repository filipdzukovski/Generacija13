import React from 'react';

export function FruitList(props){

    console.log(props);
    return(
        <div id="fruit-list">
            <ul>
                {/* {
                    props.listOfFruits.map((fruit,index)=>{
                        return(
                            <li key={index} >
                                {fruit}
                            </li>
                        )
                    })
                } */}

                {
                    props.listOfFruits.map((fruit,index)=>(
                        <li key={index}>
                            {fruit}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}