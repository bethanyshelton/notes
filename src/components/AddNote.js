import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddNote(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		//update note state while typing
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function sendNewNote(event) {
		//take contents of note and add to notes array on App.js
		//use props to send current note to addNote func on App.js
		props.onAdd(note);
		//reset note to blank
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	return (
		<div className="absolute bottom-8 right-8 w-96">
			<form
				className="flex flex-col max-w-md justify-center bg-teal items-center shadow-xl h-48"
				onSubmit={sendNewNote}
			>
				<div className="w-full">
					<Input
						type="text"
						placeholder="a new title..."
						name="title"
						value={note.title}
						onchange={handleChange}
					/>
				</div>
				<div className="w-full">
					<Input
						type="text"
						placeholder="a new note..."
						name="content"
						value={note.content}
						onchange={handleChange}
					/>
				</div>
				<div className="relative w-full">
					<Button>+</Button>
				</div>
			</form>
		</div>
	);
}

export default AddNote;
