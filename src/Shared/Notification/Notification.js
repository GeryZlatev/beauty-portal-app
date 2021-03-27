import style from './Notification.module.css';
const Notification = ({ children }) => {
    return (
    <div className={style["notification-wrapper"]}>
        {children}
        </div>
    )
}

export default Notification;