import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark  mb-3">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Examples</span>
					</Link>
				</div>
			</nav>
		);
	}
}
