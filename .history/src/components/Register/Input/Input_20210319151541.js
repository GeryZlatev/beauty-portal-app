import React from 'react';

const Input = ({id, type, label, value, onChange}) => {
    return (
        <>
        <label htmlFor={id}>
        <p>{label}:</p>   
        <input type={type} value={value} onChange={onChange} />
        </label> 
        </>
    )
}

export default Input;