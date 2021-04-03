import SlackFeedback, { themes } from 'react-slack-feedback';

const Feedback = () => {

    const onFeedbackSubmitHandler = () => {
        
    }
    return (
        <SlackFeedback
            channel="#general"
            theme={themes.dark}
            user={JSON.parse(localStorage.getItem('email'))}
            onSubmit={onFeedbackSubmitHandler}
        />
    )

}

export default Feedback;