import hero1 from "../assets/img/hero/hero4.jpg";
import hero2 from "../assets/img/hero/hero2.png";
import hero3 from "../assets/img/hero/hero3.png";
const Hero = () => {
	return (
		<section
			className="hero-section"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero1})`,
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
