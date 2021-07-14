import React from "react";

function Input(props) {
	return (
		<div>
			<input
				className="p-2 px-8 w-full bg-purple-50 font-zen text-2xl text-purple-700 font-bold placeholder-purple-700 placeholder-opacity-40"
				type={props.type}
				placeholder={props.placeholder}
				name={props.name}
				value={props.value}
				autoComplete="off"
				onChange={props.onchange}
			></input>
		</div>
	);
}

export default Input;
