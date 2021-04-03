import SlackFeedback, { themes } from 'react-slack-feedback';
import * as ServicesDB from '../../services/servicesDB';

const Feedback = (props) => {

    const onFeedbackSubmitHandler = (payload) => {
        ServicesDB.sendFeedback(payload)
        
    }
    return (
        <SlackFeedback
            onOpen={() => {
                setTimeout(close, 5000)
            }}
            channel="#general"
            theme={themes.dark}
            user={JSON.parse(localStorage.getItem('email'))}
            onSubmit={onFeedbackSubmitHandler}
            // setTimeout={5 * 1000}
        />
    )

}

export default Feedback;