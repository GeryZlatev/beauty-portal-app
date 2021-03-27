import style from './RedirectButton.module.css';
import { withRouter } from 'react-router-dom';
const RedirectButton = ({children}) => {
    return (
        <button className={style["redirect-button"]}>
            {children}
        </button>
    )
}

export default withRouter(RedirectButton);