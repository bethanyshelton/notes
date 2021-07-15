import React from "react";

function Button({ children, color, ...rest }) {
	Button.defaultProps = {
		color: "pink",
	};

	return (
		<button className={"text-3xl bg-{color}"} {...rest}>
			{children}
		</button>
	);
}

export default Button;
