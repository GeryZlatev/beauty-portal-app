import Popup from 'reactjs-popup';
import style from './PopupForm.module.css';

const PopupForm = (props) => {
    <Popup
        trigger={<button className={style.button}>Contact us</button>}
        modal
        nested
    >
        {close => (
            <div className={style.modal}>
            <button className={style.close} onClick={close}>
                &times;
            </button>
                <div className={style.header}>Contact us</div>
                <div className={style.content}>
                    
                </div>
            </div>
        )}
    </Popup>
}

export default PopupForm;