import style from './RedirectButton.module.css';
import logo from '../../media/beautyportal_logo.jpg';
import { withRouter } from 'react-router-dom';
const RedirectButton = (props) => {
    const {
        history,
        match,
        location
    } = props
    return (
        <>
        <button className={style["redirect-button"]}>
            {props.children}
            </button>
            <div className={style["logo-wrapper"]}>
                <img src={logo} alt="Logo Beauty Portal"/>
            </div>
        </>
    )
}

export default withRouter(RedirectButton);