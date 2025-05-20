import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="site-wrap">
			<Sidebar />
			<main className="main-content">
				<Hero />
				<div className="container-fluid site-section">
					<Gallery />
				</div>
			</main>
		</div>
	);
}

export default App;
