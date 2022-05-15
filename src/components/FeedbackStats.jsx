import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length

average = average.toFixed(1).replace(/[.,]0$/, '') //fixed to 1 decimal place & replace 0 with emptyspace

  return (
      <>
    <div>{feedback.length} Reviews</div><br/>
    <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </>
  )
}

export default FeedbackStats