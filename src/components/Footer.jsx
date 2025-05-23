import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="  py-4 mt-5">
			<div className="container">
				<hr className="my-4" />

				<div className="row d-flex justify-content-between">
					<div className="col-6">
						<p className="mb-0 text-muted">
							© {currentYear} Tife & Ayo. All rights reserved.
						</p>
					</div>

					<div className="col-6 d-flex justify-content-end gap-3">
						<a href="#">
							<FaTiktok size={24} color="black" />
						</a>

						<a href="#">
							<FaInstagram size={24} color="black" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
