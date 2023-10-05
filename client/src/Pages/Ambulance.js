import React from "react";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

export default function Ambulance() {
	return (
		<div className="Ambulance mx-20">
			<Header />
			<h1 className="text-dark-green text-3xl tracking-wider font-semibold text-center mt-8">
				Our best ambulance package
			</h1>
			<div className="grid grid-cols-3 justify-around mt-14 mb-20 mx-10 gap-20">
				<div className="col-span-1 bg-shape-cream px-8 py-16 flex flex-col items-center justify-between rounded-xl">
					<div className="flex flex-col items-center justify-start">
						<div className="w-28 h-28 rounded-full bg-[#c0c0c0]"></div>
						<h2 className="text-dark-green text-3xl tracking-wider my-10">
							Silver Package
						</h2>
						<ul className="flex flex-col items-center justify-center">
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3">
								Emergency Ambulance to the hospital
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Trained paramedics and EMTs on board.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Basic medical equipment and supplies
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Non-emergency transportation for medical appointments.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Availability during regular business hours.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Limited coverage area within the city.
							</li>
						</ul>
					</div>
					<button className="w-full mt-20 border border-dark-green rounded-2xl h-14 hover:bg-dark-green duration-300">
						<p className="text-xl tracking-wide text-dark-green hover:text-white duration-300 ">
							Text Now
						</p>
					</button>
				</div>
				<div className="col-span-1 bg-shape-cream px-8 py-16 flex flex-col items-center justify-between rounded-xl">
					<div className="flex flex-col justify-start items-center">
						<div className="w-28 h-28 rounded-full bg-[#EFE29A]"></div>
						<h2 className="text-dark-green text-3xl tracking-wider my-10">
							Gold Package
						</h2>
						<ul className="flex flex-col items-center justify-center">
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3">
								Emergency and non-emergency transportation services.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Highly trained paramedics and EMTs with advanced certifications.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Advanced life support equipment and medications on board.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Non-emergency transportation for medical appointments.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Expanded coverage area, including nearby cities and regions.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Faster response times.
							</li>
							<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
								Priority access to appointments.
							</li>
						</ul>
					</div>
					<button className="w-full mt-20 border border-dark-green rounded-2xl h-14 hover:bg-dark-green duration-300">
						<p className="text-xl tracking-wide text-dark-green hover:text-white duration-300 ">
							Text Now
						</p>
					</button>
				</div>
				<div className="col-span-1 bg-shape-cream px-8 pt-16 pb-10 flex flex-col items-center justify-start rounded-xl">
					<div className="w-28 h-28 rounded-full bg-[#E5E4E2]"></div>
					<h2 className="text-dark-green text-3xl tracking-wider my-10">
						Platinum Package
					</h2>
					<ul className="flex flex-col items-center justify-center">
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3">
							transportation services.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							A dedicated medical team consisting of doctors and critical care
							nurses.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							State-of-the-art equipment, including advanced cardiac monitors
							and ventilators.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							Availability 24/7, with the option for immediate dispatch.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							Extensive coverage area, including long-distance transfers and air
							ambulance services.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							Personalized care plans and in-depth medical assessments.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							Concierge-level service, including private ambulances, if desired.
						</li>
						<li className="list-disc text-dark-green text-xl tracking-wider w-2/3 mt-3">
							Coordination with specialty hospitals and medical facilities.
						</li>
					</ul>
					<button className="w-full mt-20 border border-dark-green rounded-2xl h-14 hover:bg-dark-green duration-300">
						<p className="text-xl tracking-wide text-dark-green hover:text-white duration-300 ">
							Text Now
						</p>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
}
