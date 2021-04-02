import style from './Tags.module.css';
import {Link} from 'react-router-dom'

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
                    <li>
                        <button
                        value="dermatology"
                        onClick={(e) => console.log(e.target.value)}
                    >
                        Dermatology
                    </button>
                    </li>
                    <li>
                        <button
                            value="aesthetic-surgery"
                            onClick={(e) => console.log(e.target.value)}
                        >
                            Aesthetic Surgery
                            </button>
                            </li>
                    <li>
                        <button
                            value="ung"
                            onClick={(e) => console.log(e.target.value)}
                        >
                            UNG
                            </button>
                            </li>
                    <li>
                        <button
                            value="laser-therapist"
                            onClick={(e) => console.log(e.target.value)}
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