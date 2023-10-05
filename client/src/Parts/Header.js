import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";

export default function Header() {
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await axios.post("http://localhost:4000/logout");
			document.cookie =
				"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<header className="flex flex-row justify-between py-7">
			<h3 className="text-2xl font-bold text-dark-green tracking-wide">
				Medsite
			</h3>
			<div className="header-list flex flex-row text-dark-green text-md font-medium tracking-wide">
				<Link to="/Home" className="mx-3">
					Home
				</Link>
				<Link to="/Service" className="mx-3">
					Services
				</Link>
				<Link to="/Ambulance" className="mx-3">
					Ambulance
				</Link>
				<Link to="/About" className="mx-3">
					About Us
				</Link>
			</div>
			<div className="flex flex-row">
				<input
					type="search"
					className="search-box bg-transparent border-2 border-dark-green rounded-md w-60 py-1 placeholder-dark-green px-2"
					placeholder="search"
				/>
				<div className="relative ml-5">
					<BiMessageDetail className="text-dark-green w-10 h-10" />
					<div className="w-3 h-3 rounded-full bg-red-400 absolute right-0 top-0"></div>
				</div>
				<div className="relative ml-5 cursor-pointer">
					<IoLogOutOutline
						className="w-10 h-10 text-dark-green"
						onClick={handleLogout}
					/>
				</div>
			</div>
		</header>
	);
}
