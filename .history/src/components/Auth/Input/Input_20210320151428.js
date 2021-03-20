import React, {useRef} from 'react';

const Input = ({ type, children, name, placeholder, value}) => {
    
    return (
        <>
        <label>
        <p>{children}:</p>   
                <input type={type} name={name} placeholder={placeholder} value={ value}required/>
        </label> 
        </>
    )
}

export default Input;