import React from "react";

function Footer() {
	return (
		<div className="absolute inset-x-24 py-2 bottom-0 text-center text-purple">
			<p>&copy; {new Date().getFullYear()} Bethany Shelton</p>
		</div>
	);
}

export default Footer;
