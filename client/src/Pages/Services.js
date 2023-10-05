import React from "react";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";
import { BsFillPeopleFill, BsHospital } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Doctor } from "../Json/Doctor";
import { Nurse } from "../Json/Nurses";

export default function Services() {
	return (
		<div className="Services mx-20">
			<Header />
			<div className="pt-5">
				<h3 className="text-[#9Eb384] text-3xl tracking-wider font-semibold">
					Best Doctor
				</h3>
				<div className="py-10 grid grid-cols-4 grid-rows-2 gap-20">
					{Doctor.map((doctor, index) => {
						return (
							<div
								className="col-span-1 border-2 rounded-xl border-dark-green p-3"
								key={doctor.id}
							>
								<img src={doctor.image} alt="" className="w-full" />
								<div className="flex flex-col">
									<div className="flex flex-row my-2 pt-2">
										<BsFillPeopleFill className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{doctor.name}
										</p>
									</div>
									<div className="flex flex-row my-2">
										<BsHospital className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{doctor.hospital}
										</p>
									</div>
									<div className="flex flex-row my-2">
										<IoLocationSharp className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{doctor.location}
										</p>
									</div>
									<button className="border border-dark-green rounded-3xl h-10 mt-4 hover:bg-dark-green duration-300">
										<p className="text-lg tracking-wide text-dark-green hover:text-white duration-300 ">
											Book Now
										</p>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="pt-10 mb-20">
				<h3 className="text-[#9Eb384] text-3xl tracking-wider font-semibold">
					Best Consultation Expert
				</h3>
				<div className="py-10 grid grid-cols-4 grid-rows-2 gap-20">
					{Nurse.map((nurse, index) => {
						return (
							<div
								className="col-span-1 border-2 rounded-xl border-dark-green p-3"
								key={nurse.id}
							>
								<img src={nurse.image} alt="" className="w-full" />
								<div className="flex flex-col">
									<div className="flex flex-row my-2 pt-2">
										<BsFillPeopleFill className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{nurse.name}
										</p>
									</div>
									<div className="flex flex-row my-2">
										<BsHospital className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{nurse.hospital}
										</p>
									</div>
									<div className="flex flex-row my-2">
										<IoLocationSharp className="text-2xl text-dark-green" />
										<p className="text-dark-green font-normal text-lg ml-2 tracking-wide">
											{nurse.location}
										</p>
									</div>
									<button className="border border-dark-green rounded-3xl h-10 mt-4 hover:bg-dark-green duration-300">
										<p className="text-lg tracking-wide text-dark-green hover:text-white duration-300 ">
											Text Now
										</p>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
