import style from './ProcedureCard.module.css';

const ProcedureCard = (props) => {
    return (
        <div className={style["procedure-wrapper"]} style={{border: props.colour}}>
            <div className={style["image-wrapper"]}>
                <img src={props.image} alt="Procedure's image"/>
            </div>
            <div className={style["content-wrapper"]}>
                <p className={style["procedure-name"]}>
                    {props.name}
                </p>
                <button type="button" className={style.more}>More...</button>
                <button type="button" className={style.less}>Less</button>
            </div>
        </div>
    )

}

export default ProcedureCard;