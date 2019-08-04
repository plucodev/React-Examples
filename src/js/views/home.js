import React from "react";
import Calculator from "../component/calculator";
import Person from "../component/person";
import Card from "../component/card";
import { Link } from "react-router-dom";
// import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row justify-content-center">
						<h1>List of Projects</h1>
					</div>
					<Link to="/calculator">
						<button className="btn btn-success">Calculator</button>
					</Link>
					<Link to="/form">
						<button className="btn btn-success">Form</button>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
