import React from "react";
// import Calculator from "../component/calculator";
// import Person from "../component/person";
// import { Card } from "../component/card";
import { Link } from "react-router-dom";
// import "../../styles/home.scss";

export default class SearchBar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row justify-content-center">
						<div className="input-group mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
							/>
							<div className="input-group-append">
								<button className="btn btn-info" type="button" id="button-addon2">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
