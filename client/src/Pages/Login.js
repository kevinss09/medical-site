import React, { useState } from "react";
import LoginImg from "../assets/images/LoginImg.jpg";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const message = new URLSearchParams(location.search).get("message");

	if (message == "notloggedin") {
		alert("Not logged in yet");
	}
	axios.defaults.withCredentials = true;
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:4000/login", { email, password })
			.then((res) => {
				console.log(res);
				navigate("/Home");
			})
			.catch((err) => {
				if (err.response.status === 404) {
					alert("Cannot find the email, Please register first");
				} else {
					alert("You input the wrong password");
				}
			});
	};

	return (
		<div className="bg-grey-background relative max-h-screen w-full flex flex-row">
			<div className="left-side w-1/2 p-8">
				<h3 className="tracking-wider text-2xl font-semibold text-black">
					MedSite
				</h3>
				<div className="mt-28 ml-28">
					<h2 className="text-2xl font-semibold tracking-wider">Log in</h2>
					<form
						action="/submit"
						className="mt-12 flex flex-col"
						onSubmit={handleSubmit}
					>
						<div className="flex flex-col">
							<label
								htmlFor="Email"
								className="font-normal tracking-wider text-black text-base"
							>
								Email Address
							</label>
							<input
								type="email"
								className="mt-2 p-1 pl-3 w-2/5 border border-black rounded-md"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mt-6">
							<label
								htmlFor="Password"
								className="font-normal tracking-wider text-black text-base"
							>
								Password
							</label>
							<input
								type="password"
								className="mt-2 p-1 pl-3 w-2/5 border border-black rounded-md"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button
							className="w-2/5 text-white bg-[#00A3FF] p-2 mt-10 rounded-md font-semibold tracking-wider text-base"
							type="submit"
						>
							Login
						</button>
					</form>
					<div className="flex flex-row mt-4">
						<p className="font-light text-black text-sm tracking-wider">
							Don't have an account?
						</p>
						<Link
							to="/Signup"
							className="font-light text-[#00A3FF] text-sm tracking-wider ml-1"
						>
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className="right-side w-1/2 relative">
				<div className="w-full h-full">
					<div className="overlay absolute opacity-30 bg-black w-full h-full z-20"></div>
					<img src={LoginImg} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="absolute bottom-16 left-20 z-40">
					<h3 className="text-white text-4xl tracking-widest leading-snug font-bold">
						Get Instant Medical Care at Your <br />
						Doorstep. Your Health, Your Way
					</h3>
					<p className="text-white tracking-widest text-sm leading-relaxed mt-3">
						Take control of your Health by joining MedSite for free healthcare
						<br />
						access with the quickest and simplest way.
					</p>
				</div>
			</div>
		</div>
	);
}
