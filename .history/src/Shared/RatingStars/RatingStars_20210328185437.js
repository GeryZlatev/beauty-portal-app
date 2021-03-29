import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';


const RatingStars = () => {
    const [rate, setRate] = useState(0)
    const ratingChanged = (newRating) => {
        setRate((rate) => rate + newRating)
    }

    return (
        <>
            <div>{ rate}</div>
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={15}
            activeColor="#FFA000"
            value={0}
        />
        </>

    )
}

export default RatingStars;