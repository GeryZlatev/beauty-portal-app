import ReactStars from 'react-rating-stars-component';


const RatingStars = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
        activeColor=
    )
}