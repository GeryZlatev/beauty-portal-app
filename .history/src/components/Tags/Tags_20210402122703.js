import style from './Tags.module.css';
import {Link} from 'react-router-dom'

const Tags = (props) => {
    return (
        <>
            <div className={style["tags-component-wrapper"]}>
                <ul className={style["tags-list"]}>
                    <li><Link></Link></li>

                </ul>

            </div>
        </>
    )
    
}

export default Tags;