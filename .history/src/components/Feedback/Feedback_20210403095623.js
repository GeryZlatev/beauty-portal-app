import SlackFeedback, { themes } from 'react-slack-feedback';
import * as ServicesDB from '../../services/servicesDB';

const Feedback = (props) => {

    const onFeedbackSubmitHandler = (payload) => {
        ServicesDB.sendFeedback(payload)
        
    }
    return (
        <SlackFeedback
            channel="#general"
            theme={themes.dark}
            user={JSON.parse(localStorage.getItem('email'))}
            onSubmit={onFeedbackSubmitHandler}
            setTimeout={10000}
        />
    )

}

export default Feedback;