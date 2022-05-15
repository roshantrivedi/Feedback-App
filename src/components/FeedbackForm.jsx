import { useState, useContext, useEffect } from 'react'
import FeedbackContext from "../context/FeedbackContext"
import RatingsSelect from './RatingsSelect';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true)
        {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '')
        {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length <10)
        {
            setMessage('Review must atleast has 10 characters')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text:text,
                rating:rating,
            }
            
            if(feedbackEdit.edit === true)
            {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else
            {
                addFeedback(newFeedback);
            }
            
            setText('')
        }
        
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <RatingsSelect select ={(rating) => setRating(rating)} />
            <input type = 'text' onChange={handleTextChange} value={text} placeholder="Write your review"/>
            <button type="submit" disabled={btnDisabled}>Send</button>
            <div>{message}</div>
        </form>
    </div>
  )
}

export default FeedbackForm