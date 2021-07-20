import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);

	function addNewNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	// function deleteNote(key) {
	// 	notes.filter(note);
	// }

	return (
		<div className="relative h-screen overflow-hidden">
			<div className="flex flex-wrap">
				<AddNote onAdd={addNewNote} />
				{notes.map((note, index) => {
					return <Note key={index} title={note.title} content={note.content} />;
				})}
				<div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"></div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
