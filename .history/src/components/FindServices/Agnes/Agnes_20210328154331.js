import style from './Agnes.module.css';
import ReactPlayer from 'react-player';

const Agnes = (props) => {
    return (
        <>
            <div className={style["agnes-wrapper"]}>
                <h1 className={style["agnes-header"]}>
                    Introducing the AGNES non-operative lifting system
                </h1>
                <article className={style["agnes-main-wrapper"]}>
                <ul className={style["agnes-intro"]}>
                        <li>
                            The AGNES non-operative lifting system and its modules are intended for use in dermatological and surgical procedures.
                        </li>
                        <li>
                            Agnes isolated radiowave needles are an electrosurgical procedure for bloodless blepharoplasty based on the principle of thermally coagulated cell tissue caused by contact resistance of radio frequency energy /RF energy/.
                        </li>
                    </ul>
                    <div className={style.player}>
                        <ReactPlayer url="https://youtu.be/F7qOSdVlwzY" />
                    </div>
                </article>
                <article className={style["content-wrapper"]}>
                    <h2 className={style["content-header"]}>INDICATIONS</h2>
                    <ul>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Remove wrinkles around the eyes and lips</li>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                    </ul>
                </article>
                
            </div>
        </>
    )

}

export default Agnes