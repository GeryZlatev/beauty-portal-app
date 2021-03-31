import { SyncIcon } from '@primer/octicons-react';
import style from './Loader.module.css';
const Loader = () => {
    return (
        <div className={style["page-loader"]}>
            <SyncIcon size="medium"/>
        </div>
    )
}

export default Loader;