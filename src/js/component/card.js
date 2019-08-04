import React, { Component } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.scss";

export class Card extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, action }) => {
						return store.projects.map((item, index) => {
							return (
								<div key={index} className="card">
									<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
									<div className="card-body">
										<h5 className="card-title">{item.title}</h5>
										<p className="card-text">
											Some quick example text to build on the card title and make up the bulk of
											the cards content.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}
