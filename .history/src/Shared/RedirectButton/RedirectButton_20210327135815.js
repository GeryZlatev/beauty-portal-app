import style from './RedirectButton.module.css';
import { withRouter } from 'react-router-dom';
const RedirectButton = (props) => {
    const {
        history,
        match,
        location
    } = props
    return (
        <button className={style["redirect-button"]}>
            {props.children}
        </button>
    )
}

export default withRouter(RedirectButton);