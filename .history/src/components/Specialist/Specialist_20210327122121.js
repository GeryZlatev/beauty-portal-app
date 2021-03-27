import style from './Specialist.module.css';
import * as ServicesDB from '../../services/servicesDB';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
const Specialist = (props) => {

    const [name, setName] = useState('');
    const [practice, setPractice] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPractice, setErrorPractice] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorPhone, setErrorPhone] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const specialist = {
            name: name,
            practice: practice,
            city: city,
            phone: phone
        }
        console.log(specialist);
        // ServicesDB.addSpecialist(specialist)
        //     .then((res) => {
        //         console.log(res);
        // })
    }

    const onBlurHandler = (e) => {
        if (e.target.value.length < 3) {
            return (
                <ErrorMessage>Input content is too short!</ErrorMessage>
            )
        }
    }

    return (
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
                onBlur={(e) => onBlurHandler}
            />
            <label htmlFor="practice">Practice</label>
            <input
                type="text"
                id="practice"
                name="practice"
                value={ practice}
                    placeholder="Your practice"
                    onChange={(e) => setPractice(e.target.value)}
            />
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                value={ city}
                    placeholder="The place where your practice is"
                    onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="phone">Phone number</label>
            <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                    placeholder="+359 888 000 000"
                    onChange={(e) => setPhone(e.target.value)}
            />
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
    )

}

export default Specialist;