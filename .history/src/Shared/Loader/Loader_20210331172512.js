import { SyncIcon } from '@primer/octicons-react';

const Loader = () => {
    return (
        <div className={style["page-loading"]}>
            <SyncIcon size="medium"/>
        </div>
    )
}

export default Loader;