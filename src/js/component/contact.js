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
							<div className="row my-3">
								<div className="col-10 m-auto border border-warning rounded ">
									Contact List With Fetch
								</div>
							</div>
							<div className="row">
								<div className="col-10 px-0 m-auto border border-success rounded ">
									<ul className="pl-0 mb-0">
										<ContactCard />
									</ul>
								</div>
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
