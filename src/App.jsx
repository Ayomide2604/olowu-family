import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import LoveStory from "./components/LoveStory";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="site-wrap">
			<Sidebar />
			<main className="main-content">
				<Hero />
				<div className="container-fluid site-section">
					<LoveStory />
					<Gallery />
				</div>
				<Footer />
			</main>
		</div>
	);
}

export default App;
