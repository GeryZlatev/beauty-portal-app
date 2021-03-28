import style from './AestheticDermatology.module.css';
import ProcedureCard from '../ProcedureCard';

const AestheticDermatology = (props) => {
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                <ProcedureCard
                    image=""
                />
            </div>
        </>
    )
}

export default AestheticDermatology;