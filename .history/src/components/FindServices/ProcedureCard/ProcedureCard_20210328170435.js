import style from './ProcedureCard.module.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const currentStyle = {
    aestheticDermatology: {
        color: '1px solid #EC8AC4'
    },
    laserTherapy: {
        color: '1px solid #9190C7'
    },
    agnes: {
        color: '1px solid #6262A0'
    }, 
    femilift: {
        color: '1px solid #8568AF'
    },
    'anti-cellulit': {
        color: '1px solid #E6507D'
    }
}

const ProcedureCard = (props) => {
    return (
        <div className={style["procedure-wrapper"]}
            // style={currentStyle[props.style]}
        >
            <div className={style["image-wrapper"]}>
                <img src={props.image} alt="Procedure's image"/>
            </div>
            <div className={style["content-wrapper"]}>
                <p className={style["procedure-name"]}
                    style={currentStyle[props.style]}
                >
                    {props.name}
                </p>
                <p className={style["info-wrapper"]}>
                <ReactReadMoreReadLess
                    charLimit={80}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    readMoreClassName={style["read-more"]}
                    readLessClassName={style["read-less"]}
                >
                    { props.info}
                </ReactReadMoreReadLess>
                </p>
                {/* <button type="button" className={style.more} style={buttonStyle[props.style]}>More...</button>
                <button type="button" className={style.less} style={buttonStyle[props.style]}>Less</button> */}
            </div>
        </div>
    )

}

export default ProcedureCard;