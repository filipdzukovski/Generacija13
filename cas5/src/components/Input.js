import React from 'react';
import PropTypes from 'prop-types';
 
export const Input = ({type,placeholder,value,onChange,name,toggle,renderTextArea,changeInput}) =>{

    return(
        <p>
           {renderTextArea ? 
           <textarea 
           rows={8} 
           cols={20} 
           value={value}
           onChange={onChange}
           />
            :
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />}
           {name === "password" ? <button type="button" onClick={toggle} className="eye-button">
               <i className={"fa " + (type === "password" ? "fa-eye-slash" : "fa-eye")}></i></button> : null}
            {name === "comment" && <button type="button" onClick={changeInput}>
                Long Comment
            </button>}
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    name:PropTypes.string,
    toggle:PropTypes.func,
    renderTextArea:PropTypes.bool,
    changeInput:PropTypes.func
}