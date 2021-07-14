import React, { useState } from "react";
import Input from "./Input";

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
			<form className="flex flex-col max-w-md bg-purple-50 border rounded-xl justify-center items-center shadow-lg">
				<div className="w-full border-b-2 border-purple-700 bg-purple-50">
					<Input
						type="text"
						placeholder="my title..."
						name="title"
						value={note.title}
						onchange={handleChange}
					/>
				</div>
				<div className="w-full">
					<Input
						type="text"
						placeholder="my note..."
						name="content"
						value={note.content}
						onchange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default AddNote;
