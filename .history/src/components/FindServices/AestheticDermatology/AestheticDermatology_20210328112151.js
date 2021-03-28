import style from './AestheticDermatology.module.css';
import ProcedureCard from '../ProcedureCard';

const AestheticDermatology = (props) => {
    return (
        <>
            <div className={style["dermatologies-wrapper"]}>
                <ProcedureCard
                    image="https://media.allure.com/photos/5da4a3ea5fa8cd00095d4fef/2:1/w_3199,h_1599,c_limit/botox-cosmetic-injections-explainer.jpg"
                    name="Botox"
                />
                <ProcedureCard
                    image="https://media.allure.com/photos/5da4a3ea5fa8cd00095d4fef/2:1/w_3199,h_1599,c_limit/botox-cosmetic-injections-explainer.jpg"
                    name="Botox"
                />
            </div>
        </>
    )
}

export default AestheticDermatology;