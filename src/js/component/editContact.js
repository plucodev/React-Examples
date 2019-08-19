import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default class EditContact extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
			full_name: "",
			email: "",
			address: "",
			phone: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let contact = store.contacts.find(item => item.id === this.props.match.params.theid);
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">
									{"Edit Contact # " + this.props.match.params.theid + " " + contact.full_name}
								</h1>
								<form>
									<div className="form-group">
										<label>Full Name</label>
										<input
											onChange={e => this.setState({ full_name: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Full Name"
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											onChange={e => this.setState({ address: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Enter address"
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											onChange={e => this.setState({ phone: e.target.value })}
											type="text"
											className="form-control"
											placeholder="Enter phone"
										/>
									</div>
									<button
										onClick={() =>
											actions.addContact(
												this.state.full_name,
												this.state.email,
												this.state.address,
												this.state.phone,
												this.props
											)
										}
										type="button"
										className="btn btn-primary form-control">
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
