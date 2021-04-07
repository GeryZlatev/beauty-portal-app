import style from './Tags.module.css';
import { Link, Redirect } from 'react-router-dom';

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
                    <li>
                        <button
                    >
                    <Link to="/doctors">All</Link>
                    </button>
                    </li>
                    <li>
                        <button
                        onClick={props.event}
                    >
                        Dermatology
                    </button>
                    </li>
                    <li>
                        <button
                            onClick={props.event}
                        >
                            Aesthetic Surgery
                            </button>
                            </li>
                    <li>
                        <button
                            onClick={props.event}
                        >
                            UNG
                            </button>
                            </li>
                    <li>
                        <button
                            onClick={props.event}
                        >
                            Laser Therapist
                            </button>
                            </li>
                </ul>

            </div>
        </>
    )
    
}

export default Tags;