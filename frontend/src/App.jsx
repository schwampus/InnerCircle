import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./routes/Home_Route";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./routes/About_Route";
import Faq from "./routes/FAQ_Route.jsx";
import Profile from "./routes/Profile_Route";
import Categories from "./routes/Categories_Route";
import Feed from "./routes/Feed_Route";
import CirclePage from "./routes/Circle_Route.jsx";
import Category from "./routes/Category_Route.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<div>404 Not Found</div>} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/categories/:categoryName" element={<Category />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/circle/:circleId/:circleSlug" element={<CirclePage />} />
			</Routes>
		</>
	);
}

export default App;
