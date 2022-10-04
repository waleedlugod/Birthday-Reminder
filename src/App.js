import "./App.css";
import Birthday from "./components/Birthday";
import { birthdays } from "./data/birthdays";

function App() {
	return (
		<>
			{birthdays.map((birthdays) => {
				return <Birthday key={birthdays.id} {...birthdays} />;
			})}
		</>
	);
}

export default App;
