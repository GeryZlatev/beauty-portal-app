import React, { Children } from 'react';
import style from './ErrorMessage.module.css';

const Error = () => {
    return (
        <div className={style["error-wrapper"]}>
            {Children}
        </div>
)
}

export default Error;