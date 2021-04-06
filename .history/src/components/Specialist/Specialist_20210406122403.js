import style from './Specialist.module.css';
import * as ServicesDB from '../../services/servicesDB';
import { useState } from 'react';
import {withRouter, Link } from 'react-router-dom';
import ErrorMessage from '../../Shared/ErrorMessage';
import Notification from '../../Shared/Notification';
import RedirectButton from '../../Shared/RedirectButton';
const Specialist = (props) => {

    const [name, setName] = useState('');
    const [practice, setPractice] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [bio, setBio] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPractice, setErrorPractice] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorBio, setErrorBio] = useState('');
    const [success, setSuccsses] = useState(Boolean);
    const [errorApply, setErrorApply] = useState('');

    const clearInputs = () => {
        setName('');
        setPractice('');
        setCity('');
        setPhone('');
        setImage('');
        setBio('')
    }

    const clearErrors = () => {
        setErrorName('')
        setErrorPractice('')
        setErrorCity('')
        setErrorPhone('')
        setErrorApply('')
        setErrorBio('')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const specialist = {
            name,
            practice,
            city,
            phone,
            image,
            bio
        }
        if ((!name || !practice || !phone || !city || !bio) ||
            (errorName || errorPractice || errorPhone || errorCity || errorBio)) {
            setErrorApply('Something went wrong! We are so sorry! Please fill all inputs and try again');
            setSuccsses(false);
            return null;
        }
        
        ServicesDB.addSpecialist(specialist)
            .then((res) => {
                setSuccsses(true);
                clearInputs();
                clearErrors();
            })
            .catch((error) => {
                setSuccsses(false);
                setErrorApply(error.message)
            })
    }
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
                        if (!e.target.value.length === 13) {
                            setErrorPhone('Invalid telephone number')
                        } else {
                            setErrorPhone('')
                        }
                    }}
                />
                    {errorPhone ? <ErrorMessage>{errorPhone}</ErrorMessage> : null}
            <label htmlFor="photo">Plese, add your photo <span>imageURL optional</span></label>
            <input
                type="text"
                id="photo"
                name="photo"
                value={image}
                placeholder="https://."
                onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="bio">Please, add your bio</label>
            <textarea
                value={bio}
                id="bio"
                name="bio"
                placeholder="Introduce yourself professionally..."
                onChange={(e) => setBio(e.target.value)}
                onBlur={(e) => {
                if (e.target.value.length < 100) {
                setErrorBio('Bio must be at least 100 characters long')
                } else {
                setErrorBio('')
                }
                }}
                    />
            {errorBio ? <ErrorMessage>{errorBio}</ErrorMessage> : null}
            <input
                type="submit"
                value="Send"
            />
            </form>

            <div className={style["contain-wrapper"]}>
                <h2>Request your profile</h2>
                    <p>Please, fill in the form. We'll contact you to tell you all the advantages of the <span>Beauty Portal</span> and how it can be usefull in your practice!</p>
                    {success
                    ? <RedirectButton>
                        <Link to="/services">All beauty procedures</Link>
                    </RedirectButton>
                        : null}
                    
                    <h2>I don't want to have a doctor profile right now!</h2>
                    <RedirectButton>
                        <Link to="/">Maybe later</Link>
                    </RedirectButton>
            </div>
            </div>
    </>
    )

}

export default withRouter(Specialist);