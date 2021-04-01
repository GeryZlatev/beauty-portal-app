import Popup from 'reactjs-popup';
import style from './PopupForm.module.css';

const PopupForm = (props) => {
    <Popup
        trigger={<button className={style.button}>Contact us</button>}
        modal
        nested
    >
        {close => (
            <button className={style.close} onClick={close}>
                &times;
            </button>
        )}
    </Popup>
}

export default PopupForm;