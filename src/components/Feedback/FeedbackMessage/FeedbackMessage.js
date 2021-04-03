import style from './FeedbackMessage.module.css';

const FeedbackMessage = (props) => {

    return (
        <div className={style["current-message-wrapper"]}>
            <div className={style.author}>{ props.author}</div>
            <div className={style.fallback}>{ props.fallback}</div>
            <div className={style.title}>{ props.title}</div>
            <div className={style.text}>{ props.text}</div>
        </div>
    )

}

export default FeedbackMessage;