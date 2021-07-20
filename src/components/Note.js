import React from "react";
import Button from "./Button";

function Note(props) {
	return (
		<div className="flex-none m-8 w-1/6 bg-white border-2 border-yellow justify-center items-center shadow-xl">
			<div className="relative w-full bg-yellow text-purple-100 text-center">
				<h1 className="relative p-4 font-festive text-3xl">
					{props.title}
					<div className="absolute -top-4 -right-2">
						<Button>-</Button>
					</div>
				</h1>
			</div>
			<div>
				<p className="p-2 font-zen text-xl font-bold">{props.content}</p>
			</div>
		</div>
	);
}

export default Note;
