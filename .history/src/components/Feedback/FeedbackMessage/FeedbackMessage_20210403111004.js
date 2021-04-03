import style from './FeedbackMessage.module.css';

const FeedbackMessage = (props) => {

    return (
        <div className={style["current=message-wrapper"]}>
            <p>{ props.author}</p>
            <p>{ props.fallback}</p>
            <p>{ props.title}</p>
            <p>{ props.text}</p>
        </div>
    )

}

export default FeedbackMessage;