import style from './Specialist.module.css';
const Specialist = (props) => {

    return (
    <div className={style["form-specialist"]}>
        <form >
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
                type="number"
                id="phone-number"
                name="phone-number"
                placeholder="Your phone number"
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