import heroImage from "../assets/img/hero/hero.jpg";

const Hero = () => {
	return (
		<section
			className="hero-section"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
			}}
		>
			<div className="hero-content">
				<h1 className="hero-title text-white">Ayo & Tife</h1>
				<p className="hero-subtitle">Capturing Every Moment Together</p>
				<a href="#section-photos" className="btn-hero">
					Explore Our Album
				</a>
			</div>
		</section>
	);
};

export default Hero;
