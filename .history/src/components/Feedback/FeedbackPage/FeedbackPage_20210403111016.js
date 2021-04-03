import style from './FeedbackPage.module.css';
import * as ServicesDB from '../../../services/servicesDB';
import { useState, useEffect } from 'react';
import ErrorMessage from '../../../Shared/ErrorMessage';
import Notification from '../../../Shared/Notification';
import Loader from '../../../Shared/Loader';
import FeedbackMessage from '../FeedbackMessage';

const FeedbackPage = (props) => {

    const [messages, setMessages] = useState([]);
    const [loading, setIsLoading] = useState(false)

    console.log(messages);
    useEffect(() => {
        setIsLoading(true)
        ServicesDB.getAll("feedback")
            .then(res => {
                setIsLoading(false)
                setMessages(res.docs.map((x) => {
                    console.log(x);
                    return { id: x.id, ...x.data() }
                }))
                
            }).catch(err => {
                return (<ErrorMessage>{ err.message}</ErrorMessage>)
        }) 

    }, []);

return (
    <>
        <div className={style["messages-wrapper"]}>
            {loading ? <Loader/> : messages.length ? messages.map(x => {
                return (
                    <div
                        key={x.id}
                    >
                        {x.attachments.map((x, i )=> {
                            return (
                                <FeedbackMessage
                                    key={i}
                                    author={x.author_name}
                                    fallback={x.fallback}
                                    title={x.title}
                                    text={x.text}
                                />
                            )
                        })}
                    </div>
                )
            }): <Notification>Nobady has sent feedback yet!</Notification>}
        </div>
    </>

    )
    

}

export default FeedbackPage;