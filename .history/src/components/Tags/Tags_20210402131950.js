import style from './Tags.module.css';
import {Link} from 'react-router-dom'

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
                    <li><button onClick={(e) => console.log(e.target)}>Dermatology</button></li>
                    <li><button>Aesthetic Surgery</button></li>
                    <li><button>UNG</button></li>
                    <li><button>Laser Therapist</button></li>
                </ul>

            </div>
        </>
    )
    
}

export default Tags;