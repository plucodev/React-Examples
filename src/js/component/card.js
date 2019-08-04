import React, { Component } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.scss";
import { Link } from "react-router-dom";

export class Card extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<Context.Consumer>
						{({ store, action }) => {
							return store.projects.map((item, index) => {
								return (
									<div key={index} className="col-4">
										<div className="card text-center">
											<img
												className="card-img-top"
												src="https://picsum.photos/200/100"
												alt="Card image cap"
											/>
											<div className="card-body">
												<h5 className="card-title">{item.title}</h5>
												<p className="card-text">{item.description}</p>
												<Link to={"/" + item.link} className="btn btn-primary">
													{"Go to " + item.title}
												</Link>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</React.Fragment>
		);
	}
}
