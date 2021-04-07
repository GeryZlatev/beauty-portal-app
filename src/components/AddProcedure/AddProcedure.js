import style from './AddProcedure.module.css';
import VerticalHeaderLine from '../Advertising/VerticalHeaderLine';

const AddProcedure = (props) => {

    return (
        <>
        <VerticalHeaderLine>Add your procedure</VerticalHeaderLine>
        <div className={style["add-procedure-wrapper"]}>
            <form className={style["add-procedure-form"]}>
                <label>
                    Name
                    <input type="text" placeholder="Procedure's name"/>
                    
                </label>
                <label>
                    Image URL
                    <input type="text" placeholder="https://"/>
                    
                    </label>
                    <div aria-required={true} className={style["add-procedure-radio"]}
                        // onChange={(e) => setAmIaDoctor(e.target.value)}
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
                    </div>
                <label>
                    Information
                    <textarea placeholder="More information about the procedure..." rows="20"/>
                    
                    </label>
                    
                <input type="submit" value="ADD"/>

            </form>

        </div>
        </>
    )

}

export default AddProcedure;