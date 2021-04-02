import style from './Tags.module.css';
import { Link } from 'react-router-dom'
import * as ServicesDB from '../../services/servicesDB';

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
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