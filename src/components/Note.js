import React from "react";

function Note() {
	return (
		<div className="flex flex-col bg-purple-50 border rounded-xl justify-center items-center shadow-lg">
			<div className="w-full bg-purple-700 text-purple-100 text-center">
				<h1 className="p-4 font-festive text-3xl">title</h1>
			</div>
			<div>
				<p className="p-2 font-zen text-xl font-bold">content</p>
			</div>
		</div>
	);
}

export default Note;
