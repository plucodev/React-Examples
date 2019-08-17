import React from "react";
import ContactCard from "./contactCard";

export class Contact extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row justify-content-center border rounded py-3">
						<h1>Contact List</h1>
					</div>
					<div className="row">
						<div className="col-6 ">
							<div className="row border rounded my-3">Contact List With Fetch</div>
							<div className="row">
								<ul className="pl-0">
									<ContactCard />
								</ul>
							</div>
						</div>
						<div className="col-6">
							<div className="row border rounded my-3">Contact List With Hooks</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
