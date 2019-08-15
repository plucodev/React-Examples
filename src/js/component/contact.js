import React from "react";

export class Contact extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">Contact List</div>
					<div className="row">
						<div className="col-6">
							<div className="row">Contact List With Fetch</div>
						</div>
						<div className="col-6">
							<div className="row">Contact List With Hooks</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
