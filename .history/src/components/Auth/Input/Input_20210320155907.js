import React, {useRef} from 'react';

const Input = ({ type, children, name, placeholder}) => {
    
    return (
        <>
        <label>
        <p>{children}:</p>   
                <input type={type} name={name} placeholder={placeholder} />
        </label> 
        </>
    )
}

export default Input;