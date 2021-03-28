import style from './ProcedureCard.module.css';

const currentStyle = {
    aestheticDermatology: {
        border: '1px solid #EC8AC4'
    },
    laserTherapy: {
        border: '1px solid #9190C7'
    },
    agnes: {
        border: '1px solid #6262A0'
    }, 
    femilift: {
        border: '1px solid #'
    }
}

const buttonStyle = {
    aestheticDermatology: {
    background: '#EC8AC4',
    border: '1px solid #EC8AC4',
    },
    laserTherapy: {
    background: '#9190C7',
    border: '1px solid #9190C7',
    },
    agnes: {
    background: '#6262A0',
    border: '1px solid #6262A0', 
    }
}

const ProcedureCard = (props) => {
    return (
        <div className={style["procedure-wrapper"]} style={currentStyle[props.style]}>
            <div className={style["image-wrapper"]}>
                <img src={props.image} alt="Procedure's image"/>
            </div>
            <div className={style["content-wrapper"]}>
                <p className={style["procedure-name"]}>
                    {props.name}
                </p>
                <button type="button" className={style.more} style={buttonStyle[props.style]}>More...</button>
                <button type="button" className={style.less} style={buttonStyle[props.style]}>Less</button>
            </div>
        </div>
    )

}

export default ProcedureCard;