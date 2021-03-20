import React, {useRef} from 'react';

const Input = ({ id, type, label, value, onChange }) => {
    const valueRef = useRef()
    return (
        <>
        <label id={id}>
        <p>{label}:</p>   
        <input type={type} ref={valueRef} required/>
        </label> 
        </>
    )
}

export default Input;