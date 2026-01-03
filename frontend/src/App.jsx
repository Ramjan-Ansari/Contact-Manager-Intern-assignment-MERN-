import { Routes, Route } from 'react-router-dom'
import ContactForm from "./pages/ContactForm"
import Home from "./pages/Home"
import Nabvar from './pages/Nabvar'
import ContactList from './components/ContactList.jsx'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <ToastContainer />
      <Nabvar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact' element={ <ContactForm/> } />
        <Route path='/list' element={ <ContactList/> } />
      </Routes>
    </>
  )
}

export default App
