import "./global.scss";
import Header from "./components/Header";
import About from "./components/About";
import Clips from "./components/Clips";

function App() {
	return (
		<div className="App">
			<div className="home-wrap">
				<Header />
				<div className="home-sections">
					<About />
					<Clips />
				</div>
			</div>
		</div>
	);
}

export default App;
