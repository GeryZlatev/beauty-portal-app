import React from 'react';
import style from './ErrorMessage.module.css';

const Error = ({children}) => {
    return (
        <div className={style["error-wrapper"]}>
            {{children}}
        </div>
)
}

export default Error;