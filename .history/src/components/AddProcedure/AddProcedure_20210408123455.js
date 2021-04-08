import style from './AddProcedure.module.css';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';
import { useState } from 'react/cjs/react.development';
import Notification from '../../Shared/Notification';
import ErrorMessage from '../../Shared/ErrorMessage';
import * as ServicesDB from '../../services/servicesDB';

const AddProcedure = (props) => {

    const [name, setName] = useState('');
    const [catalogue, setCatalogue] = useState('');
    const [image, setImage] = useState('');
    const [info, setInformation] = useState('');
    const [likes, setLikes] = useState([]);
    const [errName, setErrName] = useState('');
    const [errInformation, setErrInformation] = useState('');
    const [success, setSuccess] = useState(Boolean);
    const [errAdd, setErrAdd] = useState('');

    const clearInputs = () => {
    setName('');
    setCatalogue('');
    setInformation('');
    }

    const clearErrors = () => {
    setErrName('')
    setErrInformation('')
    }

    const onAddProcedureHandler = (e) => {
        e.preventDefault();
        const procedure = {
            name,
            info,
            image,
            likes,
            catalogue
        }

        if ((!name || !catalogue || !info) ||
            (errName || errInformation)) {
            setErrAdd('Something went wrong! We are so sorry! Please fill all inputs and try again');
            setSuccess(false);
            return null;
        }

        ServicesDB.addProcedure(procedure)
            .then(res => {
                setSuccess(true);
                clearInputs();
                clearErrors();
            })
            .catch(err => {
                setSuccess(false);
                setErrAdd(err.message)
        })

    }

    return (
        <>
        <VerticalHeaderLine>Add your procedure</VerticalHeaderLine>
            {success ? <Notification>You successfully sent your information! Thank you for applying!
        </Notification> : null}
        {errAdd ? <ErrorMessage>{ errAdd}</ErrorMessage> : null}
        <div className={style["add-procedure-wrapper"]}>
                <form
                    className={style["add-procedure-form"]}
                    onSubmit={onAddProcedureHandler}
                >
                <label>
                Name
                <input
                type="text"
                placeholder="Procedure's name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => {
                    if (e.target.value.length < 3) {
                    setErrName('Name must be at least 3 characters long')
                    } else {
                    setErrName('')
                    }
                }}
                />  
                </label>
                <label>
                    Image URL
                    <input 
                    type="text"
                            placeholder="https://"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                    />
                    
                    </label>
                    <div 
                    aria-required={true} 
                    className={style["add-procedure-radio"]}
                    onChange={(e) => setCatalogue(e.target.value)}
                    >
                        <label>
                            <input
                                type="radio"
                                value="aestheticDermatology"
                                name="catalogue"
                                
                            />
                            Aesthetic Dermatology
                        </label>
                        <label>
                        <input
                            type="radio"
                            value="laserTherapy"
                            name="catalogue"
                            />
                            Laser Therapy
                        </label>
                        <label>
                        <input
                            type="radio"
                            value="antiCellulite"
                            name="catalogue"
                            />
                            Anti-Cellulite
                        </label>
                    </div>
                <label>
                    Information
                    <textarea 
                    placeholder="More information about the procedure..." 
                    rows="15"
                    value={info}
                    name="information"
                    onChange={(e) => setInformation(e.target.value)}
                    onBlur={(e) => {
                    if (e.target.value.length < 100) {
                    setErrInformation('Information must be at least 100 characters long')
                    } else {
                    setErrInformation('')
                    }
                    }}
                    />                    
                    </label>                    
                <input type="submit" value="ADD"/>
            </form>
        </div>
        </>
    )

}

export default AddProcedure;