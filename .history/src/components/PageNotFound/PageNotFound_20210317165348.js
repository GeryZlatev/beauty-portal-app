import style from './PageNotFound.module.css';
import notFound from '../../media/notFound.jpg';

const PageNotFound = () => {
    return (
        <main className={style.pageNotFound}>
            <div className={style.imageWrapper}>
                <img src={ notFound} alt="Not found page"/>
            </div>
            <div className={style.content}>We are so sorry. The page is not found!</div>
        </main>
    )
}

export default PageNotFound;