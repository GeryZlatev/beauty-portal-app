import style from './ProcedureCard.module.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { useEffect, useState } from 'react';
import * as ServicesDB from '../../../services/servicesDB';

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

    const [likes, setLikes] = useState(props.likes);
    const [youLiked, setYouLiked] = useState(false)
    useEffect(() => {

        return (() => likes)
    }, [likes])

    const onLikeHandler = (e) => {
        const procedureId = e.target.attributes.id.value;
        const category = props.category;
        ServicesDB.getProcedureLikes(procedureId, category)
            .then(res => {
                if (!res) {
        e.target.setAttribute('disabled', true)
        setLikes((like) => like + 1)
                } else {
                setYouLiked(true)    
            }
        })
            
        

    }
    return (
        <div className={style["procedure-wrapper"] }
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
                        {props.info}
                
                    </ReactReadMoreReadLess>
                </p>
                    <span className={style["likes-wrapper"]}>{likes} people like this</span>
                    {youLiked ? <p>You liked it!</p> : null}
                <button
                        className={style.like}
                        onClick={onLikeHandler}
                        name={props.name}
                        id={props.id}
                >
                        Like
                    </button>
                

                {/* <button type="button" className={style.less} style={buttonStyle[props.style]}>Less</button> */}
            </div>
        </div>
    )

}

export default ProcedureCard;