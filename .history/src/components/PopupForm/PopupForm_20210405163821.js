import Popup from 'reactjs-popup';
import style from './PopupForm.module.css';
import { useState } from 'react';
import * as ServicesDB from '../../services/servicesDB';
import ErrorMessage from '../../Shared/ErrorMessage';

const PopupForm = (props) => {
    const [doctor, setDoctor] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [quest, setQuest] = useState('');
    const [catalogue, setCatalogue] = useState('specialist');
    const [errName, setErrName] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errQuest, setErrQuest] = useState('')

    // const clearInputs = () => {
    //     setName('');
    //     setEmail('');
    //     setQuest('');
    // }

    const onSendQuestHandler = () => {
        const data = {
            name,
            email,
            quest
        }
        ServicesDB.askQuestion(catalogue, doctor, { ...data })
        // clearInputs();
    }

    return (
        <Popup
        trigger={<button className={style.button} >Contact us</button>}
        onOpen={() => setDoctor(props.doctor)}
        modal
        nested
    >
        {close => (
            <div className={style.modal}>
            <button className={style.close} onClick={close}>
                &times;
            </button>
                <div className={style.header}>Ask the doctor</div>
                <div className={style.content}>
                    <label>
                            Your name
                    <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => {
                        if (name.length >= 3) {
                            setName(e.target.value)
                        } else {
                            setErrName('The name must be at least 3 characters long!')
                        }                
                    }}
                                onBlur={() => {
                                    if (errName) {
                                        return (
                                            <ErrorMessage>{ errName}</ErrorMessage>
                            )
                        }
                    }}
                    />
                    </label>
                    <label>
                        Your email
                    <input
                    type="text"
                    name="email"
                    placeholder="Your email"
                                onChange={(e) => {
                                    if (e.target.value.includes('@')) {
                                    setEmail(e.target.value)    
                                    } else {
                                        setErrEmail('Wrong email format!')
                                    }
                                    
                                }} />
                    </label>
                    <label>
                    <textarea rows="8"
                    placeholder="Enter the procedure and the questions that interest you"
                                onChange={(e) => {
                                    if (e.target.value.length >= 15) {
                                    setQuest(e.target.value)
                                    } else {
                                        setErrQuest('Your question is too short! It must be at least 15 characters long!')
                                    }
                                    
                                }} />
                    </label>
                </div>
                <div className={style.actions}>
                    <Popup
                        trigger={<button className={style.button}>Send</button>}
                        position="top center"
                        nested
                        onOpen={onSendQuestHandler}
                        >
                            
                            <div className={style["successfull-send-message"]}>
                                <p>You successfully sent your message!</p>
                                <p>Thank you for your interest!</p>
                                <p>We'll contact you as soon as posible!</p>
                                </div>
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