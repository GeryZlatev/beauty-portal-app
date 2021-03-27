import style from './Specialist.module.css';
import * as ServicesDB from '../../services/servicesDB';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import Notification from '../Notification';
const Specialist = (props) => {

    const [name, setName] = useState('');
    const [practice, setPractice] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPractice, setErrorPractice] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [success, setSuccsses] = useState(Boolean);
    const [errorApply, setErrorApply] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const specialist = {
            name: name,
            practice: practice,
            city: city,
            phone: phone
        }
        console.log(specialist);
        if (!name || !practice || !phone || !city) {
            setErrorApply('Something went wrong! We are so sorry! Please fill all inputs and try again');
            return null;
        }
        ServicesDB.addSpecialist(specialist)
            .then((res) => {
                console.log(res);
                setSuccsses(true);
                return null;
            })
            .catch((error) => {
                setSuccsses(false);
                setErrorApply(error.message)
            })
    }
    // <ErrorMessage>Something went wrong! We're so sorry! Please, try again...</ErrorMessage>

    return (
        <>
            {success ? <Notification>You successfully sent your information! Thank you for applying!</Notification> : null}
            {errorApply ? <ErrorMessage>{ errorApply}</ErrorMessage> : null}
        <div className={style["form-specialist"]}>
        <form onSubmit= {onSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={ name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value.length < 3) {
                        setErrorName('Name must be at least 3 characters long')
                        } else {
                            setErrorName('')
                    }
                }}
                />
                {errorName ? <ErrorMessage>{ errorName}</ErrorMessage> : null}
            <label htmlFor="practice">Practice</label>
            <input
                type="text"
                id="practice"
                name="practice"
                value={ practice}
                    placeholder="Your practice"
                    onChange={(e) => setPractice(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value.length < 3) {
                            setErrorPractice('Invalid Practice')
                        } else {
                            setErrorPractice('')
                        }
                    }}
                />
                {errorPractice ? <ErrorMessage>{ errorPractice}</ErrorMessage> : null}
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                value={ city}
                    placeholder="The place where your practice is"
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value.length < 3) {
                            setErrorCity('Invalid city name')
                        } else {
                            setErrorCity('')
                        }
                    }}
                />
                {errorCity ? <ErrorMessage>{ errorCity}</ErrorMessage> : null}
            <label htmlFor="phone">Phone number</label>
            <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                    placeholder="+359 888 000 000"
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) => {
                        if (!e.target.value.length == 13) {
                            setErrorPhone('Invalid telephone number')
                        } else {
                            setErrorPhone('')
                        }
                    }}
                />
                {errorPhone ? <ErrorMessage>{ errorPhone}</ErrorMessage> : null}
            <input
                type="submit"
                value="Send"
            />
            
            </form>

            <div className={style["contain-wrapper"]}>
                <h2>Request your profile</h2>
                <p>Please, fill in the form. We'll contact you to tell you all the advantages of the <span>Beauty Portal</span> and how it can be usefull in your practice!</p>
            </div>
            </div>
    </>
    )

}

export default Specialist;