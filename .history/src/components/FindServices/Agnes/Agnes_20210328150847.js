import style from './Agnes.module.css';

const Agnes = (props) => {
    return (
        <>
            <div className={style["agness-wrapper"]}>
                <h1 className={style["agnes-header"]}>
                    Introducing the AGNES non-operative lifting system
                </h1>
                <main className={style["agnes-main-wrapper"]}>
                <ul className={style["agnes-intro"]}>
                        <li>
                            The AGNES non-operative lifting system and its modules are intended for use in dermatological and surgical procedures.
                        </li>
                        <li>
                            Agnes isolated radiowave needles are an electrosurgical procedure for bloodless blepharoplasty based on the principle of thermally coagulated cell tissue caused by contact resistance of radio frequency energy /RF energy/.
                        </li>
                </ul>
                </main>
            </div>
        </>
    )

}

export default Agnes