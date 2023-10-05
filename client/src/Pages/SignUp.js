import React, { useState } from "react";
import SignupImg from "../assets/images/SignupImg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/Login");
	};

	axios.defaults.withCredentials = true;
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:4000/register", { username, email, password })
			.then(() => {
				navigate("/Login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="bg-grey-background relative max-h-screen w-full flex flex-row">
			<div className="left-side w-1/2 p-8">
				<h3 className="tracking-wider text-2xl font-semibold text-black">
					MedSite
				</h3>
				<div className="mt-28 ml-28">
					<h2 className="text-2xl font-semibold tracking-wider">Sign Up</h2>
					<form
						action="/submit"
						className="mt-12 flex flex-col"
						onSubmit={handleSubmit}
					>
						<div className="flex flex-col">
							<label
								htmlFor="username"
								className="font-normal tracking-wider text-black text-base"
							>
								Username
							</label>
							<input
								type="text"
								className="mt-2 p-1 pl-3 w-2/5 border border-black rounded-md"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mt-6">
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
						<div className="flex flex-row items-center mt-5">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
							></input>
							<p className="text-black font-light text-xs leading-normal ml-3 tracking-wide">
								By signing up, you're agree to our{" "}
								<strong>
									Terms & <br />
									Conditions
								</strong>{" "}
								and <strong>Privacy Policy</strong>
							</p>
						</div>
						<button
							className="w-2/5 text-white bg-[#00A3FF] p-2 mt-5 rounded-md font-semibold tracking-wider text-base"
							type="submit"
						>
							Register
						</button>
						<div className="flex flex-row mt-4">
							<p className="font-light text-black text-sm tracking-wider">
								Already have an account?
							</p>
							<Link
								to="/Login"
								className="font-light text-[#00A3FF] text-sm tracking-wider ml-1"
							>
								Log in
							</Link>
						</div>
					</form>
				</div>
			</div>
			<div className="right-side w-1/2 relative">
				<div className="w-full h-full">
					<div className="overlay absolute opacity-30 bg-black w-full h-full z-20"></div>
					<img src={SignupImg} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="absolute bottom-16 left-20 z-40">
					<h3 className="text-white text-4xl tracking-widest leading-snug font-bold">
						Welcome! Experience On- <br />
						Demand healthcare with MedSite
					</h3>
					<p className="text -white tracking-widest text-sm leading-relaxed mt-3">
						You can track your health by signing up for quick and conveninence
						medical
						<br />
						services and Unlock 24/7 Medical Support
					</p>
				</div>
			</div>
		</div>
	);
}
