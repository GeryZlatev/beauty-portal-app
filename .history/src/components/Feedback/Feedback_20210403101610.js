import SlackFeedback, { themes } from 'react-slack-feedback';
import * as ServicesDB from '../../services/servicesDB';

const Feedback = (props) => {

    const onFeedbackSubmitHandler = (payload) => {
        ServicesDB.sendFeedback(payload)
            .then(() => {
            payload = ""
        })
        
    }
    return (
        <SlackFeedback
            channel="#general"
            theme={themes.dark}
            disabled={false}
            user={JSON.parse(localStorage.getItem('email'))}
            onSubmit={onFeedbackSubmitHandler}
            setTimeout={5 * 1000}
            // onClose={() => {console.log()}}
        />
    )

}

export default Feedback;