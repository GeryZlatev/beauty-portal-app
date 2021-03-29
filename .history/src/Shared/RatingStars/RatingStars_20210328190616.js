import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';


const RatingStars = () => {
    const [rate, setRate] = useState(0)
    const [votesCount, setVotesCount] = useState(0)
    const [newRate, setNewRate] = useState(0)
    const ratingChanged = (newRating) => {
        setVotesCount((votes) => votes + 1);
        setRate(newRating)
        setNewRate(() => rate / votesCount)

    }

    return (
        <>
            <div>{newRate} / { votesCount} votes</div>
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