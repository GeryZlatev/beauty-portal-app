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
                    <label>
                        Your name
                        <input type="text" name="name" placeholder="Your name"/>
                    </label>
                    <label>
                        Your email
                        <input type="text" name="email" placeholder="Your email"/>
                    </label>
                    <label>
                        <input type="textarea" placeholder=""/>
                    </label>
                </div>
            </div>
        )}
    </Popup>
}

export default PopupForm;