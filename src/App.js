import { useState } from "react";
import "./App.css";
import "./styles/button.css";
import Birthday from "./components/Birthday";
import { birthdays } from "./data/birthdays";

function App() {
	const [bDays, setBDays] = useState(birthdays);

	function handleClear() {
		setBDays([]);
	}

	return (
		<div className="container">
			<main className="main-content">
				<h1>{bDays.length} birthdays today</h1>
				{bDays.map((birthdays) => {
					return <Birthday key={birthdays.id} {...birthdays} />;
				})}
				<button className="btn" onClick={handleClear}>
					Clear All
				</button>
			</main>
		</div>
	);
}

export default App;
