import {  Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './routes/home_Route';
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (<>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>

    </>
    
  )
}

export default App;
