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
		<div>
			<form className="flex flex-col max-w-md justify-center bg-teal items-center shadow-xl ring ring-teal ring-offset-4">
				<div className="w-full border-b-4 border-white">
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
					<Button>+</Button>
				</div>
			</form>
		</div>
	);
}

export default AddNote;
