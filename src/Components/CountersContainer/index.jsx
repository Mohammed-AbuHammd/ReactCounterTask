import React, { Component } from "react";
import Counter from "../Counter";
import './style.css'
class CountersContainer extends Component {
  state = {
    counters: [0, 0, 0, 0],
  };

  handleIncrement = (index, amount) => {
    this.setState((prevState) => {
      const counters = [...prevState.counters];
      counters[index] += amount;
      return { counters };
    });
  };

  handleDecrement = (index, amount) => {
    this.setState((prevState) => {
      const counters = [...prevState.counters];
      counters[index] -= amount;
      return { counters };
    });
  };

  render() {
    const { counters } = this.state;
    const total = counters.reduce((acc, counter) => acc + counter, 0);

    return (
      <div>
        <div className="counters__container">
          {counters.map((counter, index) => (
            <Counter
              key={index}
              index={index}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}
        </div>
        <div className="total__value">
          <h4>Total: <span>{total}</span></h4>
        </div>
      </div>
    );
  }
}

export default CountersContainer;
