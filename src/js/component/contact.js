import React from "react";
import ContactCard from "./contactCard";
import { Link } from "react-router-dom";

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
							<div className="row my-3">
								<div className="col-10 m-auto border border-warning rounded ">
									Contact List With Fetch
								</div>
							</div>
							<div className="row">
								<div className="col-10 px-0 m-auto ">
									<ul className="pl-0 mb-0">
										<ContactCard />
									</ul>
								</div>
							</div>
							<div className="row justify-content-center mt-3">
								<Link to="/add-contact">
									<button type="button" className="btn btn-outline-info">
										Add Contact
									</button>
								</Link>
							</div>
						</div>
						<div className="col-6">
							<div className="row my-3">
								<div className="col-10 m-auto border border-success rounded ">
									Contact List With Hooks
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
