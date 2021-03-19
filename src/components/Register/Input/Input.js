import React from 'react';

const Input = ({id, label, value, onChange}) => {
    return (
        <>
        <label htmlFor={id}>
        <p>{label}:</p>   
        <input type="text" value={value} onChange={onChange} />
        </label> 
        </>
    )
}

export default Input;