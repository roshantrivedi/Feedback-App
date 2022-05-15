import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
//import FeedbackData from './components/FeedbackData'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLink from './components/AboutLink';
import AboutPage from './Pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext' 

function App() {
  return(
    <FeedbackProvider>
  <Router>
   <Header /> 
   <Routes>
    <Route exact path='/' element={
      <>
      <FeedbackForm/>
      <FeedbackStats/>
      <FeedbackList/>
      </>
    }>
    </Route>
    <Route exact path ='/about' element={<AboutPage/>}/>
    </Routes>
    <AboutLink/>
  </Router>
  </FeedbackProvider>
  )
}

export default App;
