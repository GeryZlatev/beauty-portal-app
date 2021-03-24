import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const Input = ({ type, children, name, placeholder, onChange, value}) => {
    
    return (
        <>
        <label>
        <p>{children}:</p>   
                <DebounceInput
                    debounceTimeout={5000}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
        </label> 
        </>
    )
}

export default Input;