import style from './VerticalHeaderLine.module.css';

const VerticalHeaderLine = ({children}) => {
    return (
        <h2
            className={style.verticalHeader}
        >
            {children}
        </h2>
    )
}

export default VerticalHeaderLine;