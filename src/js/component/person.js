import React, { Component } from "react";
import "./Person.css";

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
			<div className="Person">
				<form>
					<div>
						<p>
							<strong>First Name:</strong>
						</p>
						<p>
							<input name="firstName" type="text" />
						</p>
					</div>

					<div>
						<p>
							<strong>Last Name:</strong>
						</p>
						<p>
							<input name="lastName" type="text" />
						</p>
					</div>

					<div>
						<p>
							<strong>Email:</strong>
						</p>
						<p>
							<input name="email" type="email" />
						</p>
					</div>

					<div>
						<p>
							<strong>Phone:</strong>
						</p>
						<p>
							<input name="phone" type="tel" />
						</p>
					</div>

					<p>
						<button>Save Information</button>
					</p>
				</form>
			</div>
		);
	}
}

export default Person;
