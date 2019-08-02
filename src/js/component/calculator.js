import React, { Component } from "react";
import "../../styles/calculator.scss";

class Calculator extends Component {
	constructor() {
		super();

		this.state = {
			number1: 0,
			number2: 0,
			result: 0
		};
	}

	handleOnChange = e => {
		const {
			target: { value, name }
		} = e;

		this.setState({
			[name]: Number(value)
		});
	};

	handleResult = e => {
		this.setState({
			result: this.state.number1 + this.state.number2
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-8">
						<input onChange={this.handleOnChange} name="number1" type="text" value={this.state.number1} />
						{" + "}
						<input onChange={this.handleOnChange} name="number2" type="text" value={this.state.number2} />
					</div>
					<div className="col float-left">
						<button className="btn btn-info" onClick={this.handleResult}>
							=
						</button>
					</div>
					<div className="col float-left">
						<p className="result">{this.state.result}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
