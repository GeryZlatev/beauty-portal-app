import React from 'react';
import style from './ErrorMessage.module.css';

const Error = (props) => {
    return (
        <div className={style["error-wrapper"]}>
            {props.children}
        </div>
)
}

export default Error;