import {  Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './routes/home_Route';
import Login from "./components/Login";
import Signup from "./components/Signup";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

export default App;
