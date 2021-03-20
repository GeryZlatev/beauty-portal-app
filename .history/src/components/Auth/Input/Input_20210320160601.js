import React, {useRef} from 'react';

const Input = ({ type, children, name, placeholder, onChange}) => {
    
    return (
        <>
        <label>
        <p>{children}:</p>   
                <input type={type} name={name} placeholder={placeholder} onChange={ onChange}/>
        </label> 
        </>
    )
}

export default Input;