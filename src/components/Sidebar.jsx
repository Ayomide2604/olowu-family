import React, { useState } from "react";
import { FaTimes, FaBars, FaTiktok, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	if (isMenuOpen) {
		document.body.classList.add("offcanvas-menu");
	} else {
		document.body.classList.remove("offcanvas-menu");
	}

	return (
		<>
			<div
				className={`site-mobile-menu site-navbar-target ${
					isMenuOpen ? "offcanvas-menu" : ""
				}`}
			>
				<div className="site-mobile-menu-header  ">
					<div className=" mt-3 d-flex justify-content-between mb-3">
						<div className="site-mobile-menu-header">
							<h2 href="index.html">Ayo&Tife</h2>
						</div>
						<span
							className="icon-close2 js-menu-toggle mx-3"
							onClick={toggleMenu}
						>
							<FaTimes color="black" size={25} />
						</span>
					</div>
				</div>
				<div
					className="site-mobile-menu-body header-bar"
					style={{ minHeight: "100vh" }}
				>
					<ul className="site-nav-wrap" onClick={toggleMenu}>
						<li>
							<a href="#section-home" className="nav-link">
								Home
							</a>
						</li>

						<li>
							<a href="#section-love-story" className="nav-link">
								Our Story
							</a>
						</li>

						<li>
							<a href="#section-photos" className="nav-link">
								Photos
							</a>
						</li>

						<li>
							<a href="#">
								<span className="icon-instagram">
									<FaInstagram />
								</span>
							</a>
						</li>

						<li>
							<a href="#">
								<span className="icon-tiktok">
									<FaTiktok />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<header
				className="header-bar d-flex d-lg-block align-items-center"
				data-aos="fade-right"
			>
				<div className="site-logo ">
					<a href="index.html">Ayo&Tife</a>
				</div>

				<div
					className="d-inline-block d-lg-none ml-md-0 ml-auto py-3"
					style={{ position: "relative", top: "3px" }}
				>
					<a
						href="#"
						className="site-menu-toggle js-menu-toggle"
						onClick={toggleMenu}
					>
						<FaBars size={30} color="black" />
					</a>
				</div>

				<div className="main-menu">
					<ul className="js-clone-nav">
						<li>
							<a href="#section-home" className="nav-link">
								Home
							</a>
						</li>
						<li>
							<a href="#section-love-story" className="nav-link">
								Our Story
							</a>
						</li>
						<li>
							<a href="#section-photos" className="nav-link">
								Photos
							</a>
						</li>
					</ul>
					<ul className="social js-clone-nav d-flex justify-content-center">
						<li>
							<a href="#">
								<span className="icon-instagram">
									<FaInstagram />
								</span>
							</a>
						</li>

						<li>
							<a href="#">
								<span className="icon-tiktok">
									<FaTiktok />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Sidebar;
