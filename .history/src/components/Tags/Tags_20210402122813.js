import style from './Tags.module.css';
import {Link} from 'react-router-dom'

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
                    <li><button>Dermatology</button></li>
                    <li><button>Aesthetic Surgery</button></li>
                    <li><button>UNG</button></li>
                    <li><button>Dermatology</button></li>

                </ul>

            </div>
        </>
    )
    
}

export default Tags;