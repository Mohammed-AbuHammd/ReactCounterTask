import React, { Component } from "react";
import "./style.css";

class Counter extends Component {
  handleIncrease = () => {
    this.props.onIncrement(this.props.index, 1);
  };

  handleDecrease = () => {
    this.props.onDecrement(this.props.index, 1);
  };

  render() {
    return (
      <div className="box">
        <button className="increment" onClick={this.handleIncrease}>
          +
        </button>
        <span>{this.props.counter}</span>
        <button className="decrement" onClick={this.handleDecrease}>
          -
        </button>
      </div>
    );
  }
}


export default  Counter;
