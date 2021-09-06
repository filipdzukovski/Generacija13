import React from 'react';
import PropTypes from 'prop-types';

export function Car(props){

    console.log(props);
    return(
        <div id='car'>
            <table border='1'>
                <thead>
                    <tr>
                        <th>
                            Brand
                        </th>
                        <th>
                            Model
                        </th>
                        <th>
                            Year
                        </th>
                       <th>
                           Place
                       </th>
                       <th>
                           Street
                       </th>
                        <th>
                            Plates
                        </th>
                        <th>
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.vozila.map((vozilo,i)=>{
                        return(
                            <tr key={i}>
                                <td>{vozilo.brand}</td>
                                <td>{vozilo.model}</td>
                                <td>{vozilo.year}</td>
                                <td>{vozilo.plates.grad.naselba}</td>
                                <td>{vozilo.plates.grad.ulica}</td>
                                <td>{vozilo.plates.oznaka}</td>
                                <td>{props.datum}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

Car.propTypes = {
    vozila: PropTypes.arrayOf(PropTypes.object).isRequired
}