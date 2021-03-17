import style from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <main className={style.pageNotFound}>
            <div className={style.imageWrapper}>
                <img />
            </div>
            <p>We are so sorry. The page is not found!</p>
        </main>
    )
}

export default PageNotFound;