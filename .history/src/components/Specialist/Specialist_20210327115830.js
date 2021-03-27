import style from './Specialist.module.css';
import * as ServicesDB from '../../services/servicesDB';
import { useState } from 'react';
const Specialist = (props) => {

    // const [name, setName] = useState('');
    // const [practice, setPractice] = useState('');
    // const [city, setCity] = 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const specialist = {
            name: e.target.name.value,
            practice: e.target.practice.value,
            city: e.target.city.value,
            phone: e.target.phone.value
        }
        ServicesDB.addSpecialist(specialist)
            .then((res) => {
                console.log(res);
        })
    }

    return (
    <div className={style["form-specialist"]}>
        <form onSubmit= {onSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                // value={ }
                placeholder="Your name"
            />
            <label htmlFor="practice">Practice</label>
            <input
                type="text"
                id="practice"
                name="practice"
                // value={ }
                placeholder="Your practice"
            />
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                // value={ }
                placeholder="The place where your practice is"
            />
            <label htmlFor="phone-number">Phone number</label>
            <input
                type="text"
                id="phone-number"
                name="phone-number"
                placeholder="+358 888 000 000"
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