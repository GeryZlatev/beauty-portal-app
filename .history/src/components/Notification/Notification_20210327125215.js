import style from './Notification.module.css';
const Notification = ({ children }) => {
    <div className={style["notification-wrapper"]}>
        {children}
    </div>
}

export default Notification;