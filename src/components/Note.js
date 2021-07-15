import React from "react";

function Note() {
	return (
		<div className="flex flex-col m-8 max-w-sm bg-white border-2 border-yellow justify-center items-center shadow-xl">
			<div className="w-full bg-yellow text-purple-100 text-center">
				<h1 className="p-4 font-festive text-3xl">title</h1>
			</div>
			<div>
				<p className="p-2 font-zen text-xl font-bold">content</p>
			</div>
		</div>
	);
}

export default Note;
