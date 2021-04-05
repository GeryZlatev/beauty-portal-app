import style from './RedirectButton.module.css';
import logo from '../../media/beautyportal_logo.png';
import { withRouter } from 'react-router-dom';
const RedirectButton = () => {
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