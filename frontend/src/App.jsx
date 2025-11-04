import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './routes/home_Route';
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./routes/About_Route";
import Faq from "./routes/FAQ_Route.jsx";
import Profile from "./routes/Profile_Route";
import Categories from "./routes/Categories_Route";
import Feed from "./routes/Feed_Route";
import "./App.css";

function App() {
  return (<>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/feed" element={<Feed/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/faq" element={<Faq/>} />

    
    </Routes>

    </>
    
  )
}

export default App;
