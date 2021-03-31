import style from './Agnes.module.css';
import ReactPlayer from 'react-player';
import VerticalHeaderLine from '../../Advertising/VerticalHeaderLine'

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
                        <ReactPlayer
                            playing={true}
                            loop= {true}
                            url="https://www.youtube.com/watch?v=0hQZ8HA7vnw"
                        />
                    </div>
                </article>
                <article className={style["content-wrapper"]}>
                    <VerticalHeaderLine className={style.newHeader}>INDICATIONS</VerticalHeaderLine>
                    <ul className={style.indications}>
                        <li>Face shaping - lifting, melting fat, contouring</li>
                        <li>Remove wrinkles around the eyes and lips</li>
                        <li>Removal of comedones on the face</li>
                        <li>Remove double chin</li>
                        <li>Active acne vulgaris, including acne scars</li>
                        <li>Remove bags under the eyes</li>
                        <li>Removal of syringoma - small benign tumors</li>
                    </ul>
                </article>
                
            </div>
        </>
    )

}

export default Agnes