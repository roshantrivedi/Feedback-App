import {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([{
        id: 1,
        rating: 9,
        text: 'This is feedback #1'
    },
    {
        id: 2,
        rating: 10,
        text: 'This is feedback #2'
    }])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?'))
        {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
    
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

      const updateFeedback = (id, updItem) => 
      {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
            )
      }

      const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
      }

    return <FeedbackContext.Provider value = {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;