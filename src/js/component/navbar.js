import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-dark bg-dark  mb-3">
							<div className="container">
								<Link to="/">
									<span className="navbar-brand mb-0 h1">React Examples</span>
								</Link>
								<form className="form-inline my-2 my-lg-0">
									<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
										Login
									</button>
								</form>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
