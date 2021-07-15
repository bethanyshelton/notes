import React from "react";

function Input(props) {
	return (
		<div className="flex justify-center ">
			<input
				className={
					"p-2 px-8 w-11/12 font-zen text-2xl font-bold" +
					(props.name === "title" ? "bg-teal" : "bg-white")
				}
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
