import style from './Advertising.module.css';
import ellanse from '../../media/EllanseLogo-723x250.jpg';
import ellansePhoto from '../../media/Ellanse.jpg';

const Advertising = () => {

    return (
        <>
            <h1>Biostimulating dermal fillers</h1>
            <h2>ELLANSÉ ™ - ELLANSÉ DERMAL FILLERS</h2>

            <ul>
                <li>Ellansé ™, winner of Frost & Sullivan 2011 - European Innovative Technology of the Year for dermal fillers!</li>
                <li>Ellansé ™ is a unique and innovative dermal series of fillers, which introduces a new era of safe and innovative solutions for facial cosmetic procedures.</li>
                <li></li>
            </ul>

            <div className={style.imageWrapper}>
                <img src={ellanse} alt="Elanse logo"/>
            </div>

            <p className={style.description}>The dermal series of Ellansé лъ fillers combines the advantages - immediate correction of wrinkles and folds, stimulates the formation of natural collagen from the body for beautiful, fresh and long-lasting results.</p>

            <div className={style.imageWrapper}>
                <img src={ellansePhoto} alt="Ellance products"/>
            </div>

            <p className={style.description}>Collagen is one of the most important natural structures of the skin, which helps maintain its firmness, elasticity and flexibility. Over time, the skin gradually loses its ability to produce collagen naturally, leading to sagging skin and the formation of wrinkles and creases on the face. Ellansé uses the body's natural response to stimulate the body's own collagen (neo-collagenesis) - restoring a fresh, youthful appearance. Ellansé ™ meets your needs for beautiful, fresh, more durable and cost-effective results. Its four different options allow you to choose how long you would like the results to last, eliminating the need for frequent and repetitive</p>
        </>
    )

}

export default Advertising;