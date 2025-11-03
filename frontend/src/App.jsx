import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './routes/home_Route'
import LogIn from './routes/login_Route'     
import SignUp from './routes/signup_Route'
import Header from './components/header.jsx';


function App() {
  return (<>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>

    </>
    
  )
}

export default App

