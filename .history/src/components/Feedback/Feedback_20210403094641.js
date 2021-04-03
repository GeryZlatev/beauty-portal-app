import SlackFeedback, { themes } from 'react-slack-feedback';
import * as ServicesDB from '../../services/servicesDB';

const Feedback = (props) => {

    const onFeedbackSubmitHandler = () => {
        ServicesDB.sendFeedback(payload)
        .then(res => console.log(res))
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