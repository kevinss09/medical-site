import React from "react";
import Header from "../Parts/Header";
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";
import About4 from "../assets/images/about4.png";
import About5 from "../assets/images/about5.png";
import Footer from "../Parts/Footer";

export default function AboutUs() {
	return (
		<div className="About-us mx-20">
			<Header />
			<h1 className="text-dark-green text-3xl tracking-wider font-semibold text-center mt-8">
				What is MedSite?
			</h1>
			<div className="flex flex-col my-24 mx-10">
				<div className="flex flex-row">
					<div className="w-1/2">
						<img src={About1} alt="" className="w-full-h-full" />
					</div>
					<div className="w-1/2 ml-5">
						<h4 className="text-dark-green text-4xl tracking-wider font-medium">
							Revolutioning Healthcare Access
						</h4>
						<p className="text-dark-green opacity-70 text-2xl tracking-wide font-normal leading-loose mt-5 w-3/4">
							In the fast-paced world we live in, access to healthcare services
							should be as easy as a click of a button. This belief led to the
							birth of MedSite, a groundbreaking web design service dedicated to
							transforming the way people connect with medical professionals and
							emergency services.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse mt-20">
					<div className="w-1/2 ml-8">
						<img src={About2} alt="" className="w-full-h-full" />
					</div>
					<div className="w-1/2">
						<h4 className="text-dark-green text-4xl tracking-wider font-medium">
							History of MedSite
						</h4>
						<p className="text-dark-green opacity-70 text-2xl tracking-wide font-normal leading-loose mt-5 w-3/4">
							MedSite was founded in 2023 by a group of visionary entrepreneurs
							who recognized the need for a seamless and user-friendly platform
							that bridges the gap between patients and healthcare providers.
							Inspired by personal experiences of navigating the complexities of
							healthcare systems, they set out to create a digital solution that
							simplifies the process of booking appointments, scheduling
							consultations, and accessing emergency medical assistance.
						</p>
					</div>
				</div>
				<div className="flex flex-row mt-20">
					<div className="w-1/2">
						<img src={About3} alt="" className="w-full-h-full" />
					</div>
					<div className="w-1/2 ml-8">
						<h4 className="text-dark-green text-4xl tracking-wider font-medium">
							Empowering Patients and Professionals
						</h4>
						<p className="text-dark-green opacity-70 text-2xl tracking-wide font-normal leading-loose mt-5 w-3/4">
							MedSite is more than just a web design service; it's a commitment
							to improving healthcare accessibility. Our team comprises web
							designers, developers, healthcare experts, and emergency service
							professionals who work collaboratively to build a platform that
							empowers both patients and medical practitioners.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse mt-20">
					<div className="w-1/2">
						<img src={About4} alt="" className="w-full-h-full" />
					</div>
					<div className="w-1/2 ml-8">
						<h4 className="text-dark-green text-4xl tracking-wider font-medium">
							MedSite Services
						</h4>
						<ul className="text-dark-green opacity-70 text-2xl tracking-wide font-normal leading-loose mt-5 w-3/4">
							<li className="list-disc">
								<strong>Book Appointments with Doctors:</strong> MedSite's
								user-friendly interface allows patients to effortlessly find and
								schedule appointments with trusted medical professionals.
							</li>
							<li className="list-disc mt-5">
								<strong>Schedule Consultations with Experts:</strong> We
								understand that healthcare decisions can be complex.
							</li>
							<li className="list-disc mt-5">
								<strong>Book Emergency Ambulance Services:</strong> In times of
								crisis, every second counts. MedSite offers a quick and reliable
								way to request emergency ambulance services.
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-row mt-20">
					<div className="w-1/2">
						<img src={About5} alt="" className="w-full-h-full" />
					</div>
					<div className="w-1/2 ml-8">
						<h4 className="text-dark-green text-4xl tracking-wider font-medium">
							Accessible to everyone
						</h4>
						<p className="text-dark-green opacity-70 text-2xl tracking-wide font-normal leading-loose mt-5 w-3/4">
							MedSite envisions a future where healthcare is accessible to all,
							where booking an appointment or seeking expert advice is a
							hassle-free experience. We continuously strive to enhance our
							services, embracing the latest technologies and design trends to
							provide a seamless, secure, and efficient healthcare platform for
							everyone.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
