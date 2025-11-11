import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/Home_Route";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./routes/About_Route";
import Faq from "./routes/FAQ_Route.jsx";
import Profile from "./routes/Profile_Route";
import Categories from "./routes/Categories_Route";
import Feed from "./routes/Feed_Route";
import CirclePage from "./routes/Circle_Route.jsx";
import PrivacyPolicy from "./routes/PrivacyPolicy.jsx";
import Terms from "./routes/Terms.jsx";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/circle/:circleId/:circleSlug" element={<CirclePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
