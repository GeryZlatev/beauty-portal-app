import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const Input = ({ type, children, name, id, placeholder, onChange, value, defaultValue}) => {
    
    return (
        <>
        <label>
        <p>{children}:</p>   
                <DebounceInput
                    debounceTimeout={5000}
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    defaultValue={defaultValue}
                />
        </label> 
        </>
    )
}

export default Input;