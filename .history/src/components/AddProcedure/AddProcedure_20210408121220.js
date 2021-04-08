import style from './AddProcedure.module.css';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';
import { useState } from 'react/cjs/react.development';

const AddProcedure = (props) => {

    const [name, setName] = useState('');
    const [catalogue, setCatalogue] = useState('');
    const [information, setInformation] = useState('');
    const [errName, setErrName] = useState('');
    const [errInformation, setErrInformation] = useState('');
    const [success, setSuccess] = useState('');

    return (
        <>
        <VerticalHeaderLine>Add your procedure</VerticalHeaderLine>
        <div className={style["add-procedure-wrapper"]}>
            <form className={style["add-procedure-form"]}>
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
                    value={information}
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