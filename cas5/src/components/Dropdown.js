import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({elements,changeOption}) => {

    return(
        <p>
            <label htmlFor="app-select">Choose an app</label>
            <select onChange={changeOption} id="app-select" name="app-select">
                    {elements.map((element,i)=>{
                        return(
                            <option key={i} value={element.value}>{element.name}</option>
                        )
                    })}
            </select>
        </p>
    )
}

Dropdown.propTypes={
    changeOption:PropTypes.func,
    elements:PropTypes.array
}