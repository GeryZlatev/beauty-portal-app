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
                <label>
                    Information
                    <textarea placeholder="More information about the procedure..." rows="20"/>
                    
                </label>

            </form>

        </div>
        </>
    )

}

export default AddProcedure;