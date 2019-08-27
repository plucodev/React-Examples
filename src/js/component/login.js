import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Login extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return <React.Fragment>Login</React.Fragment>;
				}}
			</Context.Consumer>
		);
	}
}
