import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddNote() {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	return (
		<div className="absolute bottom-8 right-8 w-96">
			<form className="flex flex-col max-w-md justify-center bg-teal items-center shadow-xl">
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
				<div>
					<Button className="bg-pink">+</Button>
				</div>
			</form>
		</div>
	);
}

export default AddNote;
