import React from "react";

function Input(props) {
	return (
		<div className="flex justify-center ">
			<input
				className="p-2 px-8 m-4 mt-6 w-11/12 font-zen text-2xl font-bold rounded-full outline-none focus:ring-2 focus:ring-purple"
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
