import React from 'react';
import style from './ErrorMessage.module.css';

const Error = ({error}) => {
    return (
        <div className={style["error-wrapper"]}>
            {error}
        </div>
)
}

export default Error;