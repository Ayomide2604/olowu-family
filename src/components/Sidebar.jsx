import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

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
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close mt-3">
						<span className="icon-close2 js-menu-toggle" onClick={toggleMenu}>
							<FaTimes color="black" />
						</span>
					</div>
				</div>
				<div className="site-mobile-menu-body">
					<ul className="site-nav-wrap">
						<li>
							<a href="#section-home" className="nav-link">
								Home
							</a>
						</li>
						<li>
							<a href="#section-photos" className="nav-link">
								Photos
							</a>
						</li>
						<li>
							<a href="#section-about" className="nav-link">
								About
							</a>
						</li>
						<li>
							<a href="#section-testimonial" className="nav-link">
								Testimonial
							</a>
						</li>
						<li>
							<a href="#section-blog" className="nav-link">
								Blog
							</a>
						</li>
						<li>
							<a href="#section-contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
			<header
				className="header-bar d-flex d-lg-block align-items-center"
				data-aos="fade-right"
			>
				<div className="site-logo">
					<a href="index.html">Logo</a>
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
							<a href="#section-photos" className="nav-link">
								Photos
							</a>
						</li>
						<li>
							<a href="#section-about" className="nav-link">
								About
							</a>
						</li>
						<li>
							<a href="#section-testimonial" className="nav-link">
								Testimonial
							</a>
						</li>
						<li>
							<a href="#section-blog" className="nav-link">
								Blog
							</a>
						</li>
						<li>
							<a href="#section-contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
					<ul className="social js-clone-nav">
						<li>
							<a href="#">
								<span className="icon-instagram"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="icon-facebook"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="icon-twitter"></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="icon-linkedin"></span>
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Sidebar;
