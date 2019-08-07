import React, { Component } from "react";

export const Todo = () => (
	<React.Fragment>
		<div className="container">
			<div className="row">
				<div className="col-6">
					<div>
						<h2 className="text-center">Todo With State</h2>
					</div>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button className="btn btn-danger" type="button" id="button-addon2">
								Add Todo
							</button>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div>
						<h2 className="text-center">Todo With Context API</h2>
					</div>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button className="btn btn-danger" type="button" id="button-addon2">
								Add Todo
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row">s</div>
			<div className="row">s</div>
		</div>
	</React.Fragment>
);
