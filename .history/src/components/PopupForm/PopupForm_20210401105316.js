import Popup from 'reactjs-popup';
import style from './PopupForm.module.css';

const PopupForm = (props) => {
    return (
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
                        <input type="textarea" placeholder="Enter the procedure and the questions that interest you"/>
                    </label>
                </div>
                <div className={style.actions}>
                    <Popup
                        trigger={<button className={style.button}>Send</button>}
                        position="top center"
                        nested
                    >
                        <span>You successfully sent your message! Thank you for your interest! We'll contact you as soon as posible!</span>
                    </Popup>
                    <button
                        className={style.button}
                        onClick={() => {
                            console.log('closed');
                            close();
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )}
    </Popup>
)
}

export default PopupForm;