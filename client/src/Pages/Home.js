import React, { useState, useEffect } from "react";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";
import { FaUserDoctor, FaStethoscope, FaRegMessage } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import homeHead from "../assets/images/homeHead.png";
import familyHospital from "../assets/images/familyHospital.png";
import home1 from "../assets/images/home-1.png";
import home2 from "../assets/images/home-2.png";
import home3 from "../assets/images/home-3.png";
import home4 from "../assets/images/home-4.png";
import doctorHome from "../assets/images/doctor-home.png";
import happyHome from "../assets/images/happy-home.png";
import axios from "axios";

export default function Home() {
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(false);

	axios.defaults.withCredentials = true;
	useEffect(() => {
		try {
			axios.get("http://localhost:4000/home").then((res) => {
				setUser(res.data.user);
				setIsLoading(false);
			});
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	}, []);

	return (
		<div className="Home mx-20">
			<Header />
			<div className="pt-10 pb-20 w-full flex flex-row justify-around">
				<div className="w-[40%] py-10">
					<h3 className="text-dark-green text-5xl font-medium tracking-wider leading-normal">
						We provide the best health service with expert consultation
					</h3>
					<h4 className="text-gray-default text-xl font-normal tracking-wider leading-relaxed my-6">
						We provide exquisite health facilities <br /> and schedule
						consultation with <br /> doctor
					</h4>
					<div className="button pt-10 flex flex-row">
						<div className="w-44 h-14 bg-dark-green rounded-md text-white flex flex-row items-center justify-between px-5 mr-7">
							<FaUserDoctor className="text-white w-5 h-5" />
							<h4 className="ml-1 text-white text-lg tracking-wider font-light">
								Text Doctor
							</h4>
						</div>
						<div className="w-44 h-14 bg-transparent border-2 border-dark-green rounded-md text-white flex flex-row items-center justify-between px-5">
							<FaAmbulance className="text-dark-green w-5 h-5" />
							<h4 className="ml-1 text-dark-green text-lg tracking-wider font-light">
								Text Doctor
							</h4>
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center">
					<div className="w-[575px] h-[575px] bg-light-green bg-opacity-60 rounded-full relative">
						<img
							src={homeHead}
							alt=""
							className="absolute right-0 left-[2.5rem] top-[7px]"
						/>
						<div className="bg-white bg-transparent rounded-2xl px-3 pt-2 pb-4 w-48 absolute top-[6.25rem] left-[-40px]">
							<p className="text-base tracking-wide font-medium">Doctors</p>
							<div className="button mt-3">
								<ul className="flex flex-row">
									<li className="w-8 h-8 mr-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
								</ul>
							</div>
						</div>
						<div className="bg-white bg-transparent rounded-2xl px-3 py-3 w-48 absolute top-[18.5rem] left-[-112px] flex flex-row">
							<img src={familyHospital} alt="" className="w-14 h-10" />
							<div className="ml-2">
								<p className="text-dark-green text-sm font-medium">
									Family Hospital
								</p>
								<p className="text-gray-default text-sm font-medium">
									Vancouver, BC
								</p>
							</div>
						</div>
						<div className="bg-white bg-transparent rounded-2xl px-3 pt-2 pb-4 w-48 absolute top-[4rem] right-[-40px]">
							<p className="text-base tracking-wide font-medium">
								Consultation
							</p>
							<div className="button mt-3">
								<ul className="flex flex-row">
									<li className="w-8 h-8 mr-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
									<li className="w-8 h-8 mx-1 bg-[#D9D9D9] rounded-full"></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="homeText w-full text-center pt-5">
				<h4 className="text-dark-green tracking-wider text-3xl leading-relaxed">
					Taking care of your <strong>Health</strong> with various Doctors,
					Schedule a consultation with Expert and <br /> order quick and safe{" "}
					<strong>ambulance</strong> with just a swipe of a finger
				</h4>
			</div>
			<div className="homeLogo w-full flex flex-row justify-between py-10 items-center">
				<img src={home1} alt="" className="object-none w-full h-full" />
				<img src={home2} alt="" className="object-none w-full h-full" />
				<img src={home3} alt="" className="object-none w-full h-full" />
				<img src={home4} alt="" className="object-none w-full h-full" />
			</div>
			<div className="Steps w-full flex flex-row mb-40">
				<div className="w-1/2 left-side relative z-10 flex justify-center">
					<div className="w-[550px] h-[480px] bg-transparent border-2 border-dashed  border-dark-green  relative rounded-tl-[239px] rounded-br-[62px] z-20">
						<div className="w-[550px] h-[480px] bg-[#DBE7CF] rounded-tl-[239px] rounded-br-[62px] absolute left-5 top-5 -z-10">
							<img
								src={doctorHome}
								alt=""
								className="absolute bottom-0 left-8"
							/>
						</div>
					</div>
				</div>
				<div className="w-1/2 right-side flex flex-col justify-between">
					<div className="flex flex-row items-start">
						<div className="bg-shape-cream rounded-full w-20 h-20 flex items-center justify-center">
							<FaStethoscope className="w-8 h-8 text-dark-green" />
						</div>
						<div className="ml-5">
							<h5 className="text-dark-green text-2xl tracking-wide font-bold">
								Doctor Appointment
							</h5>
							<p className="text-dark-green tracking-wider text-base mt-2">
								Get an appointment with your <br /> favourite Doctor
							</p>
						</div>
					</div>
					<div className="flex flex-row items-start">
						<div className="bg-shape-cream rounded-full w-20 h-20 flex items-center justify-center">
							<FaRegMessage className="w-8 h-8 text-dark-green" />
						</div>
						<div className="ml-5">
							<h5 className="text-dark-green text-2xl tracking-wide font-bold">
								Book Consultation
							</h5>
							<p className="text-dark-green tracking-wider text-base mt-2">
								Consult your problem and <br /> health with expert caretaker
							</p>
						</div>
					</div>
					<div className="flex flex-row items-start">
						<div className="bg-shape-cream rounded-full w-20 h-20 flex items-center justify-center">
							<FaAmbulance className="w-8 h-8 text-dark-green" />
						</div>
						<div className="ml-5">
							<h5 className="text-dark-green text-2xl tracking-wide font-bold">
								Doctor Appointment
							</h5>
							<p className="text-dark-green tracking-wider text-base mt-2">
								Book a safe and quick Ambulance
								<br /> that arrived quick in your destination
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="testimonySection bg-light-green h-[550px] -mx-20 mb-20 flex flex-row ">
				<div className="flex flex-col w-1/2 py-20 pl-28">
					<h4 className="text-dark-green text-3xl tracking-wider">
						Said People who have used our services
					</h4>
					<div className="relative w-full mt-10">
						<BiSolidQuoteAltLeft className="w-12 h-12 text-dark-green left-quote relative top-0 -left-5" />
						<p className="w-4/5 text-dark-green opacity-70 text-xl tracking-wider leading-relaxed py-5">
							I have used MedSite for almost 3 years and I've been very
							satisifed with their service. I used other health provider, but
							nothing compared to the services that MedSite gives. I never felt
							happier in my life.
						</p>
						<BiSolidQuoteAltRight className="w-12 h-12 text-dark-green right-quote absolute bottom-[-2rem] right-[110px]" />
					</div>
					<div className="flex flex-row mt-10">
						<div className="w-14 h-14 rounded-full bg-shape-cream flex items-center justify-center text-dark-green">
							<AiOutlineArrowLeft className="w-7 h-7" />
						</div>
						<div className="w-14 h-14 rounded-full bg-shape-cream flex items-center justify-center text-dark-green ml-5">
							<AiOutlineArrowRight className="w-7 h-7" />
						</div>
					</div>
				</div>
				<div className="w-1/2 relative">
					<img src={happyHome} alt="" className="absolute bottom-0 right-60" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
