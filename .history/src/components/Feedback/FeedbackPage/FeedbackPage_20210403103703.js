import style from './FeedbackPage.module.css';
import * as ServicesDB from '../../../services/servicesDB';
import { useState, useEffect } from 'react';
import ErrorMessage from '../../../Shared/ErrorMessage';
import Notification from '../../../Shared/Notification';

const FeedbackPage = (props) => {

    const [mesages, setMessages] = useState([]);
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        ServicesDB.getAll("feedback")
            .then(res => {
                setIsLoading(false)
                setMessages(res.docs.map((x) => {
                    return { id: x.id, ...x.data() }
                }))
            }).catch(err => {
                return (<ErrorMessage>{ err.message}</ErrorMessage>)
        }) 

    }, []);

    return (
        <>
            <div className={style["messages-wrapper"]}>
                {mesages.length ? mesages.map(x => {
                    return (
                        <div
                            key={x.id}
                        >
                            <p>{x.author_name}</p>
                            <p>{x.fallback}</p>
                            <p>{x.title}</p>
                            <p>{x.text}</p>
                            <p>{x.footer}</p>
                        </div>
                    )
                }): <Notification>Nobady has sent feedback yet!</Notification>}
            </div>
        </>

    )
    

}

export default FeedbackPage;