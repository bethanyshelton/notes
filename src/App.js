import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="relative h-screen overflow-hidden">
			<AddNote />
			<Note />
			<div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"></div>
			<Footer />
		</div>
	);
}

export default App;
