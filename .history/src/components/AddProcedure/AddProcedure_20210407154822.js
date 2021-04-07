import style from './AddProcedure.module.css';

const AddProcedure = (props) => {

    return (
        <div className={style["add-procedure-wrapper"]}>
            <form className={style["add-procedure-form"]}>
                <label>
                    <input type="text" placeholder="Procedure's name"/>
                    Name
                </label>
                <label>
                    <input type="text" placeholder="Procedure's image"/>
                    Image URL
                </label>
                <label>
                    <textarea placeholder="More information about the procedure..." rows="20"/>
                    Information
                </label>

            </form>

        </div>
    )

}

export default AddProcedure;