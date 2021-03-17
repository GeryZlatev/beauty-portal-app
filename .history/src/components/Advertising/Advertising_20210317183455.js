import style from './Advertising.module.css';
import elanse from '../../media/EllanseLogo-723x250.jpg';

const Advertising = () => {

    return (
        <>
            <h1>Biostimulating dermal fillers</h1>
            <h2>ELLANSÉ ™ - ELLANSÉ DERMAL FILLERS</h2>

            <ul>
                <li>Ellansé ™, winner of Frost & Sullivan 2011 - European Innovative Technology of the Year for dermal fillers!</li>
                <li>Ellansé ™ is a unique and innovative dermal series of fillers, which introduces a new era of safe and innovative solutions for facial cosmetic procedures.</li>
            </ul>

            <div className={style.imageWrapper}>
                <img src={elanse} alt="Elanse logo"/>
            </div>

            <p className={style.description}>The dermal series of Ellansé лъ fillers combines the advantages - immediate correction of wrinkles and folds, stimulates the formation of natural collagen from the body for beautiful, fresh and long-lasting results.</p>

            <div className={style.imageWrapper}>
                <img src={}/>
            </div>
        </>
    )

}

export default Advertising;