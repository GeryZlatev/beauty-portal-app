import style from './RedirectButton.module.css';
const RedirectButton = ({children}) => {
    return (
        <button className={style["redirect-button"]}>
            {children}
        </button>
    )
}

export default RedirectButton;