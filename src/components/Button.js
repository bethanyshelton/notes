import React from "react";

function Button({ children }) {
	return (
		<button className="text-3xl font-bold font-zen h-12 w-12 pb-1 text-white bg-purple rounded-full mb-4 outline-none border-2 border-purple hover:bg-white hover:text-purple hover:border-purple">
			{children}
		</button>
	);
}

export default Button;
