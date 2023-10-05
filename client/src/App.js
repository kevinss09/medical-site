import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Ambulance from "./Pages/Ambulance";
import AboutUs from "./Pages/AboutUs";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import "./assets/css/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Service" element={<Services />} />
					<Route path="/Ambulance" element={<Ambulance />} />
					<Route path="/About" element={<AboutUs />} />
					<Route path="/Signup" element={<SignUp />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
