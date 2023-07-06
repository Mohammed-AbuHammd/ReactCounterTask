import React, { Component } from "react";
import Counter from "../Counter";
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
      </div>
    );
  }
}
export default CountersContainer;
