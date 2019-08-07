import React, { Component } from "react";
import "../../styles/person.scss";

class Person extends Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phone: ""
		};
	}

	render() {
		return (
			<div className="container">
				<div className="Person">
					<form>
						<div>
							<p>
								<strong>First Name:</strong>
							</p>
							<p>
								<input value={this.state.firstName} name="firstName" type="text" />
							</p>
						</div>

						<div>
							<p>
								<strong>Last Name:</strong>
							</p>
							<p>
								<input value={this.state.lastName} name="lastName" type="text" />
							</p>
						</div>

						<div>
							<p>
								<strong>Email:</strong>
							</p>
							<p>
								<input value={this.state.email} name="email" type="email" />
							</p>
						</div>

						<div>
							<p>
								<strong>Phone:</strong>
							</p>
							<p>
								<input value={this.state.phone} name="phone" type="tel" />
							</p>
						</div>

						<p>
							<button className="btn btn-info">Save Information</button>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Person;
