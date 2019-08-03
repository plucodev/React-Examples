import React from "react";
import Calculator from "../component/calculator";
import Form from "../component/form";
import { Link } from "react-router-dom";
// import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Link to="/calculator">
					<button className="btn btn-success">Calculator</button>
				</Link>
				<Link to="/form">
					<button className="btn btn-success">Form</button>
				</Link>
			</React.Fragment>
		);
	}
}
