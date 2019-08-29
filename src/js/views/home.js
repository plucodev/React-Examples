import React from "react";
import Calculator from "../component/calculator";
import Person from "../component/person";
import { Card } from "../component/card";
import { Todo } from "../component/todo";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="container">
								<div className="row justify-content-center">
									<h1>List of Projects</h1>
								</div>
								<Card />
								<button onClick={() => actions.data()} type="button" className="btn btn-primary">
									Primary
								</button>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
