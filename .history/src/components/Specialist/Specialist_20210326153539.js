import style from './Specialist.module.css';
const Specialist = (props) => {

    return (
        <form className={style["form-specialist"]}>
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
    )

}

export default Specialist;