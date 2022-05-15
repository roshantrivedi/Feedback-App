import FeedbackItem from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0)
    {
        return <p>There is no feedback to display.</p>
    }  

  return (
    <div>
        {feedback.map((item) => (
                <FeedbackItem key = {item.id} item = {item}/>
        ))}
    </div>
  )
}

export default FeedbackList