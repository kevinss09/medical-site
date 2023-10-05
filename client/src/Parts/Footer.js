import React from "react";

export default function Footer() {
	return (
		<footer className="footer w-full pb-10">
			<div className="grid grid-cols-4 gap-8">
				<div className="col-span-1">
					<h4 className="text-dark-green font-bold text-xl tracking-wider">
						MedSite
					</h4>
					<p className="text-dark-green font-medium text-sm mt-2 tracking-wider opacity-70 leading-relaxed">
						One of the best health website that <br />
						provide service for various problems
					</p>
				</div>
				<div className="col-span-1">
					<h4 className="text-dark-green font-bold text-xl tracking-wider">
						Explore
					</h4>
					<ul className="text-[#9EB384]">
						<li className="my-4 text-base tracking-wider">Home</li>
						<li className="my-4 text-base tracking-wider">Services</li>
						<li className="my-4 text-base tracking-wider">Ambulance</li>
						<li className="my-4 text-base tracking-wider">About us</li>
					</ul>
				</div>
				<div className="col-span-1">
					<h4 className="text-dark-green font-bold text-xl tracking-wider">
						Social
					</h4>
					<ul className="text-[#9EB384]">
						<li className="my-4 text-base tracking-wider">Facebook</li>
						<li className="my-4 text-base tracking-wider">Twitter</li>
						<li className="my-4 text-base tracking-wider">Youtoube</li>
					</ul>
				</div>
				<div className="col-span-1">
					<h4 className="text-dark-green font-bold text-xl tracking-wider">
						Service
					</h4>
					<ul className="text-[#9EB384]">
						<li className="my-4 text-base tracking-wider">
							Doctor Appointment
						</li>
						<li className="my-4 text-base tracking-wider">Consulting</li>
						<li className="my-4 text-base tracking-wider">Book Ambulance</li>
					</ul>
				</div>
			</div>
			<h4 className="text-dark-green text-xl tracking-wider text-center mt-10">
				Copyright &copy; Kevin Sugeng 2023
			</h4>
		</footer>
	);
}
