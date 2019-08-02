import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
constructor() {
super();

      this.state = {
number1: 0,
number2: 0,
result: 0
      };
    }

render() {
return (
        <div className="Calculator">
          <input
            name="number1"
            type="text"
            value={this.state.number1}
          />
          {' + '}
          <input
            name="number2"
            type="text"
            value={this.state.number2}
          />

          <p><button>=</button></p>
          <p className="result">{this.state.result}</p>
        </div>
      );
    }
  }

export default Calculator;