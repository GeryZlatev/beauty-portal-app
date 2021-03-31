
import style from './Loader.module.css';
const Loader = () => {
    return (
        <div className={style["lds-heart"]}>
            <div></div>
        </div>
    )
}

export default Loader;