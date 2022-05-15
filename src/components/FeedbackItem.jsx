import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    
  return (
    <>
    <p>{item.rating} | {item.text}</p>
    <button onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple'  />
    </button>
    <button onClick={() => editFeedback(item)}>
        <FaEdit color='purple'  />
    </button>
    </>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem