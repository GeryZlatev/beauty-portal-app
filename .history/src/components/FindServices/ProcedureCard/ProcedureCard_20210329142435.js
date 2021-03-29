import style from './ProcedureCard.module.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Link } from 'react-router-dom';

const currentStyle = {
    aestheticDermatology: {
        color: '#EC8AC4'
    },
    laserTherapy: {
        color: '#9190C7'
    },
    agnes: {
        color: '#6262A0'
    }, 
    femilift: {
        color: '#8568AF'
    },
    'anti-cellulit': {
        color: '#E6507D'
    }
}

const ProcedureCard = (props) => {

    const onLikeHandler = (e) => {
        console.log(e.currentTarget.id.value);
    }
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
                    // onClick={}    
                >
                        {props.info}
                
                    </ReactReadMoreReadLess>
                    <button
                        className={style.like}
                        onClick={onLikeHandler}
                >
                    {/* <Link to="/services/laser-therapies/:serviceId">Like </Link> */}
                        Like
                    </button>
                </p>

                {/* <button type="button" className={style.less} style={buttonStyle[props.style]}>Less</button> */}
            </div>
        </div>
    )

}

export default ProcedureCard;